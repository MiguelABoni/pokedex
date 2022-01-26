import { useState, useEffect } from 'react';

export const FetchAPI = (url) => {

    /** VARIABLES WITH USESTATE */
    const [result, setResult] = useState({loading:true, dataFetch:null});
    
    const getFetch = async (urlFetch) => {
        try {
            const apiResponse = await fetch(urlFetch);
            const data = await apiResponse.json();
            setResult({loading:false, data});
        } catch (error) {
            console.log(error); /** SER MAS EXPLICITOS EN EL ERROR */
        }
    }

    useEffect(() => {
        getFetch(url);
    }, [url]);
  
    return (result);
};