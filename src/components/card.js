function Card() {
    return (
        <>
        <div className= "card">
            
            <img
                id="card1"
                // src=".././icon1.png"
                src= "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"
                alt="icon 1"
            />
            <div className = "text-card">
            <h4>Declarative</h4>
            <p className = "card-text"> React make it painless to create interactive UIs.</p>
            </div>
            
        </div>
                <div className= "card">
            
                <img
                    id="card2"
                    // src=".././icon1.png"
                    src= "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
                    alt="icon 1"
                />
                <div className = "text-card">
                <h4>Components</h4>
                <p className = "card-text"> Build encapapsulated components that manage their state.</p>
                </div>
                
            </div>

            <div className= "card">
            
            <img
                id="card3"
                // src=".././icon1.png"
                src= "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
                alt="icon 1"
            />
            <div className = "text-card">
            <h4>Single-Way</h4>
            <p className = "card-text">A set of immutable values are passed to the component's.</p>
            </div>
            
        </div>

        <div className= "card">
            
            <img
                id="card4"
                // src=".././icon1.png"
                src= "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
                alt="icon 1"
            />
            <div className = "text-card">
            <h4>JSX</h4>
            <p className = "card-text">Statically-typed, designed to run on modern browsers.</p>
            </div>
            
        </div>
            </>
        
    )

}

export default Card;