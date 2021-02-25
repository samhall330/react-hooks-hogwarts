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

const images = {AugustusGloop: AugustusGloop,
Babe: Babe,
Bailey: Bailey,
Cherub: Cherub,
GalaxyNote: GalaxyNote,
LeggoMyEggo: LeggoMyEggo,
Peppa: Peppa,
PiggySmalls: PiggySmalls,
Piglet: Piglet,
Porco: Porco,
Porkchop: Porkchop,
Trouble: Trouble,
TruffleShuffle: TruffleShuffle}



function HogCard({pig}){
    const [display, setDisplay] = useState(false)
  
    function showDetails(){
        setDisplay((display) => !display)
    }

    return(
    <div>
    <h2>{pig.name}</h2>
    <img src={images[pig.name]} alt={pig.name} />
    <button onClick={showDetails}id="show-details">Show Details</button>
    <div id="hog-data">
    {display ? <HogData pig={pig}/> : null}
    </div>
    </div>

    )
}

export default HogCard;