import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#00796b', // Teal color for primary
    },
    secondary: {
      main: '#dc004e', // Red color
    },
    background: {
      default: '#d0f0c0', // Whitish green background color
    },
  },
  typography: {
    h2: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme.palette.background.default, minHeight: '100vh', padding: 20 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">My App</Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="sm" style={{ marginTop: 20 }}>
          <Typography variant="h2">Welcome to my app!</Typography>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
