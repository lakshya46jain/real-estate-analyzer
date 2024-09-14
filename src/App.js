import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Button, InputBase } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#00796b', // Teal color for primary
    },
    secondary: {
      main: '#00796b', // Teal color for primary
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
    body1: {
      fontSize: '1.5rem',
    },
  },
  spacing: 20,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme.palette.background.default, minHeight: '100vh', padding: theme.spacing }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">My App</Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="sm" style={{ marginTop: theme.spacing }}>
          <Typography variant="h2">Welcome to my app!</Typography>
          <div style={{ marginTop: theme.spacing, display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" color="primary" style={{ marginRight: theme.spacing * 2 }}>
              Primary Button
            </Button>
            <Button variant="contained" color="secondary" style={{ marginLeft: theme.spacing * 2, marginRight: theme.spacing, backgroundColor: theme.palette.primary.main }}>
              Secondary Button
            </Button>
            <Button variant="contained" color="primary" style={{ marginRight: theme.spacing }}>
              Third Button
            </Button>
            <Button variant="contained" color="secondary" style={{ marginRight: theme.spacing, backgroundColor: theme.palette.primary.main }}>
              Fourth Button
            </Button>
          </div>
          <div style={{ marginTop: theme.spacing, display: 'flex', alignItems: 'center' }}>
            <InputBase
              type="search"
              placeholder="Search..."
              style={{
                flex: 1,
                padding: theme.spacing,
                borderRadius: theme.shape.borderRadius,
                border: `1px solid ${theme.palette.grey[300]}`,
                backgroundColor: 'white', // Add this line to make the search bar white
              }}
            />
          </div>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;