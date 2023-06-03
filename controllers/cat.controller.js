const { fetchCatImageWithText } = require("../services/cat.service");
const { mergeTwoImages } = require("../utils/common.util");

const getAndSaveMergedCatImages = async ( req, res, next ) =>{
    try{
        const firstMessage = req.query.firstMessage;
        const secondMessage = req.query.secondMessage;

        const firstImage = await fetchCatImageWithText(firstMessage, null);
        const secondImage = await fetchCatImageWithText(secondMessage, null );
    
        await mergeTwoImages( firstImage, secondImage, 400 );

        return res.status(200).json({message : "Image saved successfully"});

    }catch (error) {
        console.error( error );
        return res.status(400).json(error);
    }
}

module.exports = {
    getAndSaveMergedCatImages
}