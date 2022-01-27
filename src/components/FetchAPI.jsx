/** Library import */
import { useState, useEffect } from 'react';

export const FetchAPI = (url) => {

    /** Variables with useState */
    const [result, setResult] = useState({loading:true, dataFetch:null});
    
    const getFetch = async (urlFetch) => {
        try {
            const apiResponse = await fetch(urlFetch); /** Here the API data is fetched and stored in the JavaScript object */
            const data = await apiResponse.json();
            setResult({loading:false, data});
        } catch (error) { /** Error control for fetch performed */
            let msj = error.statusText || "Ha ocurrido un error";
            console.log(msj);
        }
    }

    useEffect(() => {
        getFetch(url);
    }, [url]);
  
    return (result);
};