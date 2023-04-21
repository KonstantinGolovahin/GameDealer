// useState to control search result
import React, { useState } from "react";
// new npm package for convinience

// nmp package for getting data
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi'
import ListCard from '../Card_Playlist';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'

import "./style.css";

const apiCallString = "https://api.rawg.io/api/games?search_exact=1&exclude_additions=1,platforms=4&page_size=10&page=1&ordering=-rating&"
const keyRAWG = "4d3c85eb44b84a48a052214685745b50";
// list of games used to create a list of cards
let playLists = []

function Searchbar() {


// manage game name from GET request
const [gameName, setGame] = useState("");

// control input value
const [searchParam, setSearch] = useState({
  keyword: "",

});








// submit form input event
const handleSubmit = (e) => {
  // prevents the submit button from refreshing the page
  e.preventDefault();

};


 // search button click event
 function getUserDefinedGameList() {

  // search a list of games by name
    axios.get(apiCallString, {
    params: {
      search: searchParam.keyword,
      key: keyRAWG
    }
  })
    .then(function (response) {
      // handle success
    //  setVideo(response.data.items[0].id.playlistId)
   // alert(response.results.count)
   // console.log(response.results.length)
playLists = []
setGame(response.data.results[0].name)

for (let i = 0; i < response.data.results.length; i++) {
 // console.log(response.results[i])
  playLists.push(response.data.results[i].name)
  console.log(playLists)

}
      

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
 
    });

}



 // generate a list of playlists
 const listItems = playLists.map((item) =>
 <ListCard gameName={item}></ListCard>

);





  return (
    <div className="row">
      <div className="mx-auto col-10 col-md-8 col-lg-6">
        <InputGroup className="mb-3 input-style">
          <Form.Control

            placeholder="type keywords"
            aria-label="type topic"
            aria-describedby="basic-addon2"
            onSubmit={handleSubmit}
            onChange={(e) => setSearch({ ...searchParam, keyword: e.target.value })}
            
            

          />
          <Button onClick={getUserDefinedGameList} variant="outline-secondary" className="searchButton">
            <FaSearch />
          </Button>
          <Button >Get Trending<GiPerspectiveDiceSixFacesRandom></GiPerspectiveDiceSixFacesRandom></Button>
        </InputGroup>

      </div>
      
      <div >
        {listItems}
       
      </div>
    </div>
  );
}

export default Searchbar;

