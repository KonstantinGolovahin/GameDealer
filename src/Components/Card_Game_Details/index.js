import React from "react";
import "./style.css";




function GameDetails(props) {

console.log(props.buttonText)



  return <div>
<p>Game details here</p>
<p>Enot:{props.userSelectedGame}</p>


  </div>
}


export default GameDetails;
