// useState to control search result
import React, { useState } from "react";
// new npm package for convinience

// nmp package for getting data
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'

import "./style.css";

const apiCallString = "https://api.rawg.io/api/games?search_exact=1&exclude_additions=1,platforms=4&page_size=10&page=1&ordering=-rating&"
const keyRAWG = "4d3c85eb44b84a48a052214685745b50";


function Searchbar() {


// manage video id from GET request
//const [videoID, setVideo] = useState("");

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
for (let i =0;i<response.length;i++) {
  console.log(response.results[i].name)
}
      

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

}







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
          <Button >Get Trending List<GiPerspectiveDiceSixFacesRandom></GiPerspectiveDiceSixFacesRandom></Button>
        </InputGroup>

      </div>
      
     
    </div>
  );
  }

export default Searchbar;

