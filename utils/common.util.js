import mergeImg from 'merge-img';
import { join } from 'path';
import { writeFile, existsSync, mkdirSync } from 'fs';
import { promisify } from 'util';

const mergeTwoImages = async (firstImage, secondImage, width ) => {

    const mergedImgData = await mergeImg([
        { src: new Buffer.from(firstImage, "binary"), x: 0, y: 0 },
        { src: new Buffer.from(secondImage, "binary"), x: width, y: 0 },
    ])

    const imageBuffer = mergedImgData.getBuffer("image/jpeg", (err, buffer) => {
        if (err) {
            console.log(err);
        }
        console.log("Images merged");
        return buffer;
    });

    return imageBuffer;
};

const saveImageToStorage = async ( image ) =>{

    const storageName = "image-storage"; 

    // Create the folder if it doesn't exist
    const folderPath = process.cwd() + `/${storageName}`;
    if (!existsSync(folderPath)) {
        mkdirSync(folderPath, { recursive: true });
    }

    const fileOut = join(process.cwd(), `/${storageName}/${generateCurrentTimestamp()}.jpg`);

    const writeFileAsync = promisify( writeFile ); // convert the callback writeFile function into a promise-based function
    await writeFileAsync( fileOut, image );

    console.log(`Image saved successfully to the location: ${fileOut}`);
    return true;
}

const generateCurrentTimestamp = () =>{
    const date = new Date();
    return date.getTime();
}

export default{
    mergeTwoImages,
    generateCurrentTimestamp,
    saveImageToStorage
}

