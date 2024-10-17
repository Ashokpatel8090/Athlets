import { FaArrowRightLong } from "react-icons/fa6";

export const HeroSection = () =>{
    return(
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Exploring the world, One Country ata time.
                    </h1>
                    <p className="paragraph">
                    Discover the history, culture, and beauty of every nation. Sort,
                    search, and filter through countries to find the details you need.
                    </p>
                    <button className="btn btn-darken btn-inline bg-white-box">
                     Start Exploring <FaArrowRightLong />
                    </button>
                </div>
                <div className="hero-image">
                    <img src="/Images/world.png" 
                    alt="World beauty img" 
                    className="banner-image"
                    />
                </div>
            </div>
        </main>
    )
}