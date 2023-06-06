import catService from "../services/cat.service";

describe("Test cat service", ()=>{
    test("Cat image fetch API with a text", async ()=>{
        const params = {
            width : 400,
            height : 500,
            c : "Cyan",
            s : 100
        }
        
        const image = await catService.fetchCatImageWithText("Hey",params);
        expect( typeof image ).toBe("string");
    })
})