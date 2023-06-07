import axios from "axios";
import constants from "../utils/common.constants.js";

const fetchCatImageWithText = async (text, params) => {
    try {
        const url = `${constants.CAT_API_BASE_URL}/says/${text}`;
        const response = await axios.get(url, {
            params: params,
            responseType: "arraybuffer",
        });
        return response.data;
    } catch (error) {
        console.log(error.toString());
        throw new Error(error.toString());
    }
};

export default {
    fetchCatImageWithText,
};
