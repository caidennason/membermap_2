import React, { useState } from 'react';
import USAMap from 'react-usa-map';
import { Box, Typography } from "@mui/material";

const StatesMap = () => {
  const [stateCode, setStateCode] = useState('');
  const [cids, setCids] = useState([])

  const mapHandler = async (event) => {
    const clickedState = event.target.dataset.name;
    setStateCode(clickedState); 

    try {
      const response = await fetch(`http://localhost:8000/api/legislators/${clickedState}/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }

      const data = await response.json();
      const legCid = data.response.legislator.map((l) => {
       return l['@attributes'].cid
      })
      setCids(legCid)
      console.log("Legislators Data:", data.response.legislator);
      console.log(legCid)
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="App">
      <Box>
        <Typography variant="h6">
          Click on a state
        </Typography>
        {stateCode && (
          <Typography variant="subtitle1">
            Selected State: {stateCode}
          </Typography>
        )}
      </Box>
      <USAMap onClick={mapHandler} />
    </div>
  );
};

export default StatesMap;
