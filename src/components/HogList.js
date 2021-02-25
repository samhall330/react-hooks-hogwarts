import React, { useState } from "react";
import HogCard from "./HogCard";



function HogList({hogs}) {
    

    const pig = hogs.map(hog => < HogCard key={hog.name} pig={hog}/>)

    return(
        <div>
            {pig}
        </div>
    )
}

export default HogList;