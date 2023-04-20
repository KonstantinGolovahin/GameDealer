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

function Searchbar() {

  return (
    <div className="row">
      <div className="mx-auto col-10 col-md-8 col-lg-6">
        <InputGroup className="mb-3 input-style">
          <Form.Control

            placeholder="type keywords"
            aria-label="type topic"
            aria-describedby="basic-addon2"
            
            

          />
          <Button  variant="outline-secondary" className="searchButton">
            <FaSearch />
          </Button>
          <Button >Get Trending List<GiPerspectiveDiceSixFacesRandom></GiPerspectiveDiceSixFacesRandom></Button>
        </InputGroup>

      </div>
      
     
    </div>
  );
  }

export default Searchbar;

