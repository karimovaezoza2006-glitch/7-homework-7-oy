import axios from 'axios';

export const useAxios = () =>{
    const request = ()=>{
        return axios ({
            url : "",
            method,
            headers : {
                "Content-Type" : "application/json",
            },
            data: {},
            params: {
                accses_token : "",
            },
        })
    }
}