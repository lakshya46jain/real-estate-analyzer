import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">My App</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Typography variant="h2">Welcome to my app!</Typography>
      </Container>
    </div>
  );
}

export default App;
