import axios from 'axios';
import constants from "../utils/common.constants.js";

const fetchCatImageWithText = async (text, params ) =>{
    
    const url = `${constants.CAT_API_BASE_URL}/says/${text}`;
    try{
        const response = await axios.get(url, {
                                    params : params,
                                    responseType: 'arraybuffer' 
                                });
        console.log(`Received response with status:${response.status}`);
        return response.data;

    }catch(error){
        console.error(error);
        throw new Error(error);
    }
}

export default{
    fetchCatImageWithText
}