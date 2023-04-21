import React from "react";
import axios from "axios";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import "./style.css";

const keyRAWG = "4d3c85eb44b84a48a052214685745b50";

function ListCard(props) {

  const [message, setMessage] = useState("")

  const [buttonText, setButtonText] = useState('');

    
  


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
function displayGame (event){

  //const [gameSearch, setSearch] = useState("")
  
/* let apiCallString = "https://api.rawg.io/api/games/" + gameID + "?"
//
   // search a list of games by name
   axios.get(apiCallString, {
    params: {
         key: keyRAWG
    }
  })
    .then(function (response) {
      // handle success
    //  setVideo(response.data.items[0].id.playlistId)
       

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
 
    });
 */
   // setButtonText(event.target.innerText)
    console.log(buttonText)

}






  return (
 
  <div class="row">
  <div class="col-8" ><Button onClick={displayGame} ><p>{props.gameName}</p></Button></div>
  <div class="col-4"><Button onClick={savePlaylist} variant="primary"  >Save</Button></div>
  
</div>

  );
}

export default ListCard;