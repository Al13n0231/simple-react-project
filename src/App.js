import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import { Button, TextField } from '@mui/material';

function App() {


  const [inputValueA, setInputValueA] = useState('');
  const [inputValueB, setInputValueB] = useState('');


  const handleChangeA = (event) => {
    setInputValueA(event.target.value);
  };
  const handleChangeB = (event) => {
    setInputValueB(event.target.value);
  };

  const handleButtonClick = () => {
    axios.get(`http://localhost:8000/echo?a=${inputValueA}&b=${inputValueB}`)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  return (
    <div style={{display: "flex", flexDirection: "column", padding: "10px"}}>
      <TextField
        label="A"
        value={inputValueA}
        onChange={handleChangeA}
        style={{marginTop: "20px"}}

      />
      <TextField
        label="B"
        value={inputValueB}
        onChange={handleChangeB}
        style={{marginTop: "20px"}}
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleButtonClick}
        style={{marginTop: "20px"}}
      >
        send to server
      </Button>
    </div>
  );
}

export default App;
