import { ACCESS_TOKEN } from "./constants";

baseUrl = import.meta.env.VITE_API_URL


const fetchWithTOKEN = async (endpoint, options = {}) =>{

    // get the token from localStorage
    const token = localStorage.getItem(ACCESS_TOKEN)

    // configure the header
    const headers = {
        "Content-Type" : "application/json",  // default content type
        ...(token && {Authorization : `Bearer ${token}`}), // adds token if available
        ...options.headers, // allow overriding header

    }

    // merge header and other options
    const config = {
        ...options,
        headers: {
            ...headers,
            ...options.headers, //allow overriding if necessary

        },
    };

    try{
        const response = await fetch(`${bseUrl}${endpoint}`, config)

        if (!response.ok){
            throw new Error(`HTTP Error : ${response.status}`);
        }

        const result = response.json();
        return result;

    }catch(error){
        console.error("Error Occured while Fetching API, " error )
        throw error;
    }


};

