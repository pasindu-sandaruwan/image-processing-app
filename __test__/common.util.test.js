import catService from "../services/cat.service";
import commonUtil from "../utils/common.util";
import constants from "../utils/common.constants";

describe("Test common util", () => {
    let firstImage = null;
    let secondImage = null;

    const imageParams = {
        width: constants.IMAGE_CONFIG.WIDTH,
        height: constants.IMAGE_CONFIG.HEIGHT,
        c: constants.IMAGE_CONFIG.COLOR,
        s: constants.IMAGE_CONFIG.SIZE,
    };

    beforeEach(async () => {
        firstImage = await catService.fetchCatImageWithText("Hey", imageParams);
        secondImage = await catService.fetchCatImageWithText("You", imageParams);
    });

    test("Merge two images", async () => {
        const mergedImage = await commonUtil.mergeTwoImages(
            firstImage,
            secondImage,
            imageParams.width
        );
        expect(mergedImage).toBeInstanceOf(Buffer);
    });

    test("Test exception when merging two images", async () => {
        try {
            await commonUtil.mergeTwoImages(null, null, imageParams.width);
        } catch (error) {
            expect(typeof error).toBe("object");
        }
    });

    test("Save image to storage", async () => {
        const result = await commonUtil.saveImageToStorage(firstImage);
        expect(result).toBe(true);
    });

    test("Test exception when saving image to storage", async ()=>{
        try {
            await commonUtil.saveImageToStorage(null);
        } catch (error) {
            expect(typeof error).toBe("object");
        }
    })

    test("Generate current timestamp", () => {
        const timestamp = commonUtil.generateCurrentTimestamp();
        expect(typeof timestamp).toBe("number");
    });
});
