import React, { useState } from "react";
import HogCard from "./HogCard";



function HogList({hogs, onHeavyHogs, hogWeight}) {
    
    const heavyHogs = [...hogs].sort(function (a, b) {
        return a.weight - b.weight;})
    
    const heavyHogsCards = heavyHogs.map(hog => < HogCard key={hog.name} pig={hog}/>)
        
    const pig = hogs.map(hog => < HogCard key={hog.name} pig={hog} />)

   

    return(
        <div>
            {/* {pig} */}
            <div className="ui grid container">
            {hogWeight ? pig : heavyHogsCards}
            </div>
        </div>
    )
}

export default HogList;