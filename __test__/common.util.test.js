const { fetchCatImageWithText } = require("../services/cat.service");
const { generateCurrentTimestamp, mergeTwoImages } = require("../utils/common.util");

describe("Test common util", ()=>{
    test("Merge two images", async () =>{
        const firstImage = await fetchCatImageWithText("Hey", null);
        const secondImage = await fetchCatImageWithText("You", null );

        await mergeTwoImages( firstImage, secondImage, 400 );
    })

    test("Generate current timestamp", ()=>{
       const timestamp = generateCurrentTimestamp();
       expect( typeof timestamp ).toBe("number");
    })
})