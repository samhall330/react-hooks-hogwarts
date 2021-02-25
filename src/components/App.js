import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList"


import hogs from "../porkers_data";

function App() {

  const[showHogs, setShowHogs] = useState(true)

  function handleGrease(){
    setShowHogs((showHogs) => !showHogs)

  }

  const filteredHogs = hogs.filter(hog => {
    if (hog.greased) {
      return (hog)
   }})

  return (
    <div className="App">
      <Nav />
    <div id="greased-filter">
      <button onClick={handleGrease} id="greased" value="greased">Show {showHogs ? "Greased" : "All"} Hogs</button>
    </div>
      {showHogs ? <HogList hogs ={hogs}/> : <HogList hogs={filteredHogs}/>}
      {/* <HogCard hogs={hogs}/> */}
    </div>
  );
}

export default App;
