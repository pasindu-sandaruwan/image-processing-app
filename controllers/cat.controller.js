const { fetchCatImageWithText } = require("../services/cat.service");
const { mergeTwoImages } = require("../utils/common.util");

const getAndSaveMergedCatImages = async ( req, res, next ) =>{
    try{
        const firstMessage = req.query.firstMessage;
        const secondMessage = req.query.secondMessage;

        // validate for the missing message inputs
        if( !firstMessage || !secondMessage ){
            return res.status(400).json({
                message : "Both messages are required"
            });
        }

        // set to default values if the query params are not available 
        const width = req.query.width ?? 400;
        const height = req.query.height ?? 500;
        const color = req.query.color ?? "Pink";
        const size = req.query.size ?? 100;

        const params = {
            width : width,
            height : height,
            c : color,
            s : size
        }

        const firstImage = await fetchCatImageWithText(firstMessage, params);
        const secondImage = await fetchCatImageWithText(secondMessage, params );
    
        await mergeTwoImages( firstImage, secondImage, width );

        return res.status(200).json({message : "Image saved successfully"});

    }catch (error) {
        console.error( error );
        return res.status(400).json(error);
    }
}

module.exports = {
    getAndSaveMergedCatImages
}