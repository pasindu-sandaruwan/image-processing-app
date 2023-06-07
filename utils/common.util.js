import mergeImg from "merge-img";
import { join } from "path";
import { writeFile, existsSync, mkdirSync } from "fs";
import { promisify } from "util";
import constants from "./common.constants.js";

const mergeTwoImages = async (firstImage, secondImage, width) => {
    try {
        const mergedImgData = await mergeImg([
            { src: new Buffer.from(firstImage, "binary"), x: 0, y: 0 },
            { src: new Buffer.from(secondImage, "binary"), x: width, y: 0 },
        ]);

        const getBufferAsync = promisify(mergedImgData.getBuffer);
        const imageBuffer = await getBufferAsync.call(mergedImgData, "image/jpeg");

        return imageBuffer;
    } catch (error) {
        console.log(error.toString());
        throw new Error(error.toString());
    }
};

const saveImageToStorage = async (image) => {
    try{
        const storageName = constants.IMAGE_STORAGE_NAME;

        // Create the folder if it doesn't exist
        const folderPath = process.cwd() + `/${storageName}`;
        if (!existsSync(folderPath)) {
            mkdirSync(folderPath, { recursive: true });
        }
    
        const fileOut = join(process.cwd(), `/${storageName}/${generateCurrentTimestamp()}.jpg`);
    
        const writeFileAsync = promisify(writeFile);
        await writeFileAsync(fileOut, image);
    
        return true;   
    }catch(error){
        console.log(error.toString());
        throw new Error(error.toString());
    }
};

const generateCurrentTimestamp = () => {
    const date = new Date();
    return date.getTime();
};

export default {
    mergeTwoImages,
    generateCurrentTimestamp,
    saveImageToStorage,
};
