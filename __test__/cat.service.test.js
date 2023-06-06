import catService from "../services/cat.service";
import constants from "../utils/common.constants";

describe("Test cat service", ()=>{

    const imageParams = {
        width : constants.IMAGE_CONFIG.WIDTH,
        height : constants.IMAGE_CONFIG.HEIGHT,
        c : constants.IMAGE_CONFIG.COLOR,
        s : constants.IMAGE_CONFIG.SIZE
    }

    test("Cat image fetch API with a text", async ()=>{
        const image = await catService.fetchCatImageWithText("Hey",imageParams);
        expect(image).toBeInstanceOf(Buffer);
    });

    test("Catch errors of image fetch API with a text", async()=>{
        const malformedMessage = "hey/world/"
        try{
            await catService.fetchCatImageWithText(malformedMessage, imageParams );   
        }catch(error){
            expect( typeof error ).toBe("object");
        }
    })
})