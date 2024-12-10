import React, { Component } from 'react';
import USAMap from 'react-usa-map';
import { Box, Typography } from "@mui/material"

class StatesMap extends Component {
  mapHandler = (event) => {
    alert(event.target.dataset.name); // This will alert the state name when clicked
  };

  render() {
    return (
      <div className="App">
        <Box>
          <Typography>
            Click on a state
          </Typography>
        </Box>
        <USAMap onClick={this.mapHandler} />
      </div>
    );
  }
}

export default StatesMap;
