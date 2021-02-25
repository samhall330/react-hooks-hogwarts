import HogData from "./HogData";
import React, { useState } from "react";
import AugustusGloop from "../assets/augustus_gloop.jpg";
import Babe from "../assets/babe.jpg";
import Bailey from "../assets/bailey.jpg";
import Cherub from "../assets/cherub.jpg";
import GalaxyNote from "../assets/galaxy_note.jpg";
import LeggoMyEggo from "../assets/leggo_my_eggo.jpg";
import Peppa from "../assets/peppa.jpg";
import PiggySmalls from "../assets/piggy_smalls.jpg";
import Piglet from "../assets/piglet.jpg";
import Porco from "../assets/porco.png";
import Porkchop from "../assets/porkchop.jpg";
import Trouble from "../assets/trouble.jpg";
import TruffleShuffle from "../assets/truffle_shuffle.jpg";

const images = {"Augustus Gloop": AugustusGloop,
Babe: Babe,
Bailey: Bailey,
Cherub: Cherub,
"Galaxy Note": GalaxyNote,
"Leggo My Eggo": LeggoMyEggo,
Peppa: Peppa,
"Piggy smalls": PiggySmalls,
Piglet: Piglet,
Porco: Porco,
Porkchop: Porkchop,
Trouble: Trouble,
"Truffle Shuffle": TruffleShuffle}



function HogCard({pig}){
    const [display, setDisplay] = useState(false)
    const [hidden, setHidden] = useState(true)
    
    function showDetails(){
        setDisplay((display) => !display)
    }

    function handleHidePig(){
        setHidden((hidden) => !hidden)
    }
    

    return(
    <div >
    <button onClick={handleHidePig} id="hide">Hide the Bacon</button>
    {hidden ? <div>
    <h2>{pig.name}</h2>
    <img src={images[pig.name]} alt={pig.name} />
    <button onClick={showDetails}id="show-details">Show Details</button>
    <div id="hog-data">
    {display ? <HogData pig={pig}/> : null}
    </div> 
    </div> : null}
    </div>

    )
}

export default HogCard;