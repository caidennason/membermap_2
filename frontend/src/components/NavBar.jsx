import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color='inherit' component={Link} to='/' sx={{ flexGrow: 1, textDecoration: 'none' }} >
          Membermap
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/statesmap">
            States Map
          </Button>
          {/* <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/register">
            Register
          </Button>
          <Button color="inherit" component={Link} to="/logout">
            Logout
          </Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
