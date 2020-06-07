import axios from 'axios';


const url = 'https://covid19.mathdro.id/api';

export const fetchData = async ()=>{
    try {
        let { data } = await axios.get(url);
        let newData ={
            confirmed:data.confirmed.value,
            recovered:data.recovered.value,
            deaths:data.deaths.value
        }
        return newData;
    } catch (error) {
       console.log(error); 
    }
}

export const fetchDataByCountry = async (country)=>{
    if(country!=="Global"){
        try {
            let { data } = await axios.get(`${url}/countries/${country}`);
            let newData ={
                confirmed:data.confirmed.value,
                recovered:data.recovered.value,
                deaths:data.deaths.value
            }
            return newData;
        } catch (error) {
        console.log(error); 
        }
    }
    else{
        try {
            let { data } = await axios.get(url);
            let newData ={
                confirmed:data.confirmed.value,
                recovered:data.recovered.value,
                deaths:data.deaths.value
            }
            return newData;
        } catch (error) {
        console.log(error); 
        }
    }
}

export const fetchCountries = async ()=>{
    try {
        let {data:{countries}} = await axios.get(`${url}/countries`);
        let result = countries.map((country)=> country.name);
        return result;
    } catch (error) {
       console.log(error); 
    }
}