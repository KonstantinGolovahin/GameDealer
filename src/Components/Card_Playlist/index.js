import React from "react";
import axios from "axios";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import "./style.css";

const keyRAWG = "4d3c85eb44b84a48a052214685745b50";

function ListCard(props) {

  const [message, setMessage] = useState("")

  const [buttonText, setButtonText] = useState('');

let userSelectedGame
  

    
  


  function savePlaylist() {



    // new array for values from a local storage
    let taskSaved = [];
    taskSaved = getTasks(taskSaved);
    console.log(taskSaved)

    // retrieve saved values from local storage if any exists
    function getTasks(arr) {
      if (localStorage.getItem("taskObject") === null) {
        arr = [];
      } else {
        arr = JSON.parse(localStorage.getItem("taskObject"));
      }
      return arr;
    }

    // get updated list of tasks from storage 
    let taskObject = getTasks(taskSaved);
    let userSave = {

      profile: "default",
     // savedList: props.listID

    }
    // add new value to array
    taskObject.push(userSave);
    // save to local storage
    localStorage.setItem("taskObject", JSON.stringify(taskObject));
    taskSaved = taskObject;
    setMessage("The song has been saved")

    // set a timeout to clear the message after 2 seconds
    setTimeout(() => {
      setMessage("");
    }, 1000);
  }


// display game details on click
const displayGame = (event) => {
  console.log(event.target.textContent);
  setButtonText(event.target.textContent)
  userSelectedGame=event.target.textContent;
  console.log(userSelectedGame)
};





  return (
 
  <div class="row">
  <div class="col-8" ><Button onClick={displayGame} ><p>{props.gameName}</p></Button></div>
  <div class="col-4"><Button onClick={savePlaylist} variant="primary"  >Save</Button></div>
  
</div>

  );
}

export default ListCard;