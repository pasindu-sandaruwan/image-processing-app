import catService from "../services/cat.service";
import commonUtil from "../utils/common.util";


describe("Test common util", ()=>{
    test("Merge two images", async () =>{
        const firstImage = await  catService.fetchCatImageWithText("Hey", null);
        const secondImage = await catService.fetchCatImageWithText("You", null );

        await commonUtil.mergeTwoImages( firstImage, secondImage, 400 );
    })

    test("Generate current timestamp", ()=>{
       const timestamp = commonUtil.generateCurrentTimestamp();
       expect( typeof timestamp ).toBe("number");
    })
})