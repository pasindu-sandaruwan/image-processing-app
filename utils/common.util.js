const mergeImg = require('merge-img');
const { join } = require('path');
const { writeFile, existsSync, mkdirSync } = require('fs');

const mergeTwoImages = async (firstImage, secondImage, width ) => {
    mergeImg([
        { src: new Buffer.from(firstImage, "binary"), x: 0, y: 0 },
        { src: new Buffer.from(secondImage, "binary"), x: width, y: 0 },
    ]).then((img) => {
        img.getBuffer("image/jpeg", (err, buffer) => {
            if (err) {
                console.log(err);
            }
            saveImageToStorage( buffer );
        });
    });
};

// TODO : Best to modify this function later to store the image in to a cloud storage and return the link
const saveImageToStorage = ( image ) =>{

    const storageName = "image-storage"; 

    // Create the folder if it doesn't exist
    const folderPath = process.cwd() + `/${storageName}`;
    if (!existsSync(folderPath)) {
        mkdirSync(folderPath, { recursive: true });
    }

    const fileOut = join(process.cwd(), `/${storageName}/${generateCurrentTimestamp()}.jpg`);

    writeFile(fileOut, image, "binary", (err) => {
        if (err) {
            console.error(err);
            throw new Error(err);
        }

        console.log("The file was saved!");
        return;
    });
}

const generateCurrentTimestamp = () =>{
    const date = new Date();
    return date.getTime();
}

module.exports = {
    mergeTwoImages,
    generateCurrentTimestamp
}

