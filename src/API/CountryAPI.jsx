import axios from "axios";

const API = axios.create({
    baseURL:"https://restcountries.com/v3.1"
});

//HTTPS gate method

export const getCountryData = () =>{
    return API.get("/all?fields=name,population,region,capital,flags");
}

//HTTP get method for individual country  name

export const getIndCountryData = (names) =>{
    return API.get(
        `/name/${names}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
      );
}