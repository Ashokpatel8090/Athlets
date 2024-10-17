import { useEffect, useState, useTransition } from "react"
import {getCountryData} from "../API/CountryAPI"
import { Loader } from "../Components/UI/Loader";
import { CountryCard } from "../Components/Layout/CountryCards";
import { SearchFilter } from "../Components/UI/SearchFilter";

export const Country = () =>{

  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() =>{
    
    startTransition(async() =>{
      const res = await getCountryData()
      // console.log(res);
      setCountries(res.data);
      
    })
  },[]);

  if(isPending) return <Loader/>
  // console.log(search, filter);

  const searchCountry = (country) =>{
    if(search){
      return (country.name.common.toLowerCase().includes(search.toLowerCase())
    )
    }
    return country;
  }

  const filterRegion = (country) =>{
    if(filter === "all") return country;
    return country.region === filter;
  }

  //main Logic

  const filterCountries = countries.filter((country) =>searchCountry(country) && filterRegion(country));
  
  return (
    <section className="country-section">
      <SearchFilter 
      search={search} 
      setSearch={setSearch}
       filter={filter} 
       setFilter={setFilter}
       countries={countries}
       setCountries={setCountries}
        />
      <ul className="grid grid-four-cols">
        {
          filterCountries.map((curCountries, key) =>{
            return <CountryCard country={curCountries} key={key} />
          })
        }
      </ul>
    </section>
  )
}