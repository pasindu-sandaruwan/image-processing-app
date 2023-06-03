const request = require('request');
const API_BASE_URL = "https://cataas.com/cat"

const  fetchCatImageWithText = (text, params ) =>{
    
    const url = `${API_BASE_URL}/says/${text}`;
    return new Promise((resolve, reject)=>{
        request.get( { url : url, qs : params, encoding : 'binary'}, (error, response, body)=>{
            if( error ){
                console.error( error );
                reject(new Error(error));
            }else{
                resolve(body);
            }
        })
    })
}

module.exports ={
    fetchCatImageWithText
}