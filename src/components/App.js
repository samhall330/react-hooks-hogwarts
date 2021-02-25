import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList"


import hogs from "../porkers_data";

function App() {

  const[showHogs, setShowHogs] = useState(true)
  const[hogWeight, setHogWeight] = useState(true)
  const[allHogs, setAllHogs] = useState(hogs)

  function handleGrease(){
    setShowHogs((showHogs) => !showHogs)

  }

  function handleHeavyHogs(){
    setHogWeight((hogWeight) => !hogWeight)
  }

  
    console.log("after sort:", hogs)
  // console.log(heavyHogs)

  const filteredHogs = hogs.filter(hog => {
    if (hog.greased) {
      return (hog)
   }})

  return (
    <div className="App">
      <Nav />
    <div id="greased-filter">
      <button onClick={handleGrease} id="greased" value="greased">Show {showHogs ? "Greased" : "All"} Hogs</button>
    <button onClick={handleHeavyHogs}> {hogWeight ? "Organize Hogs" : "All Hogs"} </button>
    </div >
    <div>
      {showHogs ? <HogList hogs ={hogs} onHeavyHogs={handleHeavyHogs} hogWeight={hogWeight}/> : <HogList hogs={filteredHogs} onHeavyHogs={handleHeavyHogs} hogWeight={hogWeight}/>}
    
    </div>
    </div>
  );
}

export default App;
