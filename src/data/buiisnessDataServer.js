import axios from "axios";
import buiisnessDataStore from "./buiisnessDataStore";


export async function getBusiness() {
    try {
        const x = await axios.get('http://localhost:8787/businessData')
        
        buiisnessDataStore.setData(x.data)
      
    }
    catch (error) {
        if (error.response.status === 401) {

        }
        else {
            console.log(error)
        }
    }
}

//איך מעדכנים אוביקט
export async function postBusiness(business) {
   
    return await axios.post(' http://localhost:8787/businessData', business)
        .then(x => buiisnessDataStore.setData(x.data))
        .catch(x => console.log('failed'))
    
}