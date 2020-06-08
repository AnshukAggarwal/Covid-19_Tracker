import React from "react";
import CountUp from 'react-countup';

function Card({ data : { confirmed, recovered, deaths },country}){
    if(!confirmed){
        return 'Loading....';
    }
    console.log(country);
    let displayText = country==="Global"? "Current Numbers Globally" : `Current Numbers in ${country}`;
    return(
        <div>
            <h1>{displayText}</h1>
            <div className="container">
                <h2 className="confirmed">
                    <CountUp
                    start={0}
                    end={confirmed}
                    duration={2}
                    separator="," 
                    />
                    <br/>
                    Infected
                </h2>
                <h2 className="recovered">
                <CountUp
                    start={0}
                    end={recovered}
                    duration={2}
                    separator="," 
                    />
                    <br/>
                    Recovered
                    <br/>
                    ({((recovered/confirmed)*100).toFixed(2)}%)
                </h2>
                <h2 className="deaths">
                <CountUp
                    start={0}
                    end={deaths}
                    duration={2}
                    separator="," 
                    />
                    <br/>
                    Deaths
                    <br/>
                    ({((deaths/confirmed)*100).toFixed(2)}%)
                </h2>
            </div>
        </div>
    )
}

export default Card