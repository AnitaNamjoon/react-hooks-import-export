import React from "react";
import howManyParks from "./parks/howManyParks";

function ColoradoStateParks() {
  const parksInfo = howManyParks(); 

  return (
    <div>
      <h1>Colorado State Parks!</h1>
      <p>{parksInfo}</p>
    </div>
  );
}

export default ColoradoStateParks;
