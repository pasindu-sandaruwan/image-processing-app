import { config } from "dotenv";
config();

const constants = {
    CAT_API_BASE_URL : process.env.CAT_API_BASE_URL,
    IMAGE_CONFIG : {
        WIDTH : 400,
        HEIGHT : 500,
        COLOR : "Pink",
        SIZE : 100
    },
    DEFAULT : {
        FIRST_MESSAGE : "Hello",
        SECOND_MESSAGE : "You"
    }
}

export default constants;
