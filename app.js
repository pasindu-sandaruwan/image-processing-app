
import catService from './services/cat.service.js';
import constants from './utils/common.constants.js';
import minimist from 'minimist';
import commonUtil from './utils/common.util.js';

const argv = minimist(process.argv.slice(2));
const argVInputsArray =  argv._; //store the argv input array to a variable

/*
* Function to prepare the incoming argv values as inputs
*/
const prepareAndGetImageInputs = ( inputs ) =>{
    return {
        firstMessage : inputs[0] ?? constants.DEFAULT.FIRST_MESSAGE, 
        secondMessage : inputs[1] ?? constants.DEFAULT.SECOND_MESSAGE
    }
}

/*
* Function to prepare the image properties based on the argv inputs
* If the inputs are not present the values are set to default values
*/
const prepareAndGetImageProps = ( inputs ) =>{
    return {
        width : inputs[2] ?? constants.IMAGE_CONFIG.WIDTH,
        height : inputs[3] ?? constants.IMAGE_CONFIG.HEIGHT,
        c : inputs[4] ?? constants.IMAGE_CONFIG.COLOR,
        s : inputs[5] ?? constants.IMAGE_CONFIG.SIZE
    }
}

const main = async () =>{
    const {firstMessage, secondMessage} = prepareAndGetImageInputs( argVInputsArray );
    const imageProps = prepareAndGetImageProps( argVInputsArray );

    // Put the API calls into a Promise Array
    const apiCalls = [ 
        catService.fetchCatImageWithText(firstMessage, imageProps ),
        catService.fetchCatImageWithText(secondMessage, imageProps )
    ];

    // call the Promise all get the responses at once
    const images = await Promise.all(apiCalls)
        .then(responses=>{
            return responses;
        })
        .catch(err=>{
            console.error(err);
            throw new Error(err);
        });
    const mergedImage = await commonUtil.mergeTwoImages( images[0], images[1]);
    await commonUtil.saveImageToStorage(mergedImage);
}

main();