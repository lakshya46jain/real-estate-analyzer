import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Button, InputBase } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GoogleMap, useJsApiLoader, Autocomplete } from '@react-google-maps/api';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#00796b', // Teal color for primary
    },
    secondary: {
      main: '#00796b', // Teal color for secondary
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

// Default location for the map
const defaultCenter = {
  lat: 40.712776, // Latitude for New York City
  lng: -74.005974, // Longitude for New York City
};

const libraries = ['places'];

function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDJJLsCIudPBKKhEOBrAJYsdG2e_zeUJNo', 
    libraries,
  });

  const [autocomplete, setAutocomplete] = useState(null);
  const [center, setCenter] = useState(defaultCenter);

  const onLoad = (autoC) => {
    setAutocomplete(autoC);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        setCenter({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
      }
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  };

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

          {/* Buttons */}
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
              Registration
            </Button>
          </div>

          {/* Google Maps Autocomplete Search Bar */}
          <div style={{ marginTop: theme.spacing, display: 'flex', alignItems: 'center' }}>
            {isLoaded && (
              <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <InputBase
                  type="search"
                  placeholder="Search for a place..."
                  style={{
                    flex: 1,
                    padding: theme.spacing,
                    borderRadius: theme.shape.borderRadius,
                    border: `1px solid ${theme.palette.grey[300]}`,
                    backgroundColor: 'white', // Make the search bar white
                  }}
                />
              </Autocomplete>
            )}
          </div>

          {/* Google Map Display */}
          {isLoaded && (
            <div style={{ marginTop: theme.spacing }}>
              <GoogleMap
                center={center}
                zoom={12}
                mapContainerStyle={{ width: '100%', height: '400px' }} // Set map size here
              >
              </GoogleMap>
            </div>
          )}
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
