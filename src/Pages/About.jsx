import apijsonData from "../API/contryData.json";

export const About = () =>{
    return (
        <section className="section-about container">
            <h2 className="container-title">
                here are the Interesting facts
                <br />
                We are proud of
            </h2>

            <div className="gradient-cards">


{
    apijsonData.map((countryData) =>{
        const {countryName, capital, population, interestingFacts, id} = countryData;
        return(
            <div className="card" key={id}>
                    <div className="container-card bg-blue-box">
                        <p className="card-title">{countryName}</p>
                        <p>
                            <span className="card-description">Capital: </span>
                            {capital}
                        <p/>                        
                            <span className="card-description">Population: </span>
                            {population}
                        <p/>
                            <span className="card-description">InterestingFacts: </span>
                            {interestingFacts}
                        </p>
                    </div>
                </div>
        )
    })
}

                
            </div>
        </section>
    )
}