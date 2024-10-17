import {NavLink} from "react-router-dom";

export const CountryCard = ({country}) =>{
    const {flags, name, capital,region, population} = country;
    return(
       
        <li className="country-card card">
            <div className="container-card bg-blue-box">
                <img src={flags.svg} alt={flags.alt} />
                <div className="countryInfo">
                    <p className="card-title">{name.common.length <= 14 ? name.common : name.common.slice(0,14) + "..."}</p>

                    <p>
                        <span className="card-description">Capital: </span>{capital}
                    </p>

                    <p>
                        <span className="card-description">Population: </span>{population}
                    </p>

                    <p>
                        <span className="card-description">Region: </span>{region}
                    </p>

                    <NavLink to={`/country/${name.common}`}> <button>Read More</button>
                    </NavLink>
                </div>
            </div>
        </li>
    )
}