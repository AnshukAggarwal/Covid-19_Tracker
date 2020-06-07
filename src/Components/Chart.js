import React from "react";
import {Bar} from "react-chartjs-2";


function Chart({data,country}){
    let displayText = country==="Global"? "Current Numbers Globally" : `Current Numbers in ${country}`;
    if(!data){
        return "Loading..."
    }

    return(
        <div>
            <Bar
                data={{
                    labels:['Infected','Recovered','Deaths'],
                    datasets:[{
                        label:'People',
                        backgroundColor:['red','green','grey'],
                        data:[data.confirmed, data.recovered, data.deaths]
                    }]
                    
                }}
                options={{
                    legend: {display:false},
                    title: {display:true,text:displayText},
                    width:100,
                    height:30
                }}
            />
        </div>
    )
}
export default Chart