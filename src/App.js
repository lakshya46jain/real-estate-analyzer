import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Box, InputBase } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { GoogleMap, useJsApiLoader, Autocomplete } from '@react-google-maps/api';

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#00796b', // Teal color
    },
    secondary: {
      main: '#f9f9f9', // White for buttons and background contrast
    },
    background: {
      default: '#f0f4f8', // Light background color
    },
  },
  typography: {
    h6: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '2.2rem',
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 16, // Global rounded corners
  },
  spacing: 8,
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
      <Box sx={{ flexGrow: 1, minHeight: '100vh', backgroundColor: '#00796b' }}>
        {/* Top Navigation Bar */}
        <AppBar position="static" style={{ backgroundColor: '#fff', color: '#000', boxShadow: 'none' }}>
          <Toolbar style={{ justifyContent: 'space-between' }}>
            <Box display="flex" alignItems="center">
              <Box
                component="img"
                src="/website-logo.png"
                sx={{
                  width: '20%',
                  height: '5vh',
                  objectFit: 'cover',
                }}
              />
              <Typography variant="h6" color="inherit">
                Ghar Ghar Apna
              </Typography>
            </Box>
            <Box>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Projects</Button>
              <Button color="inherit">Localities</Button>
              <Button color="inherit">Developers</Button>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Main Layout */}
        <Grid container spacing={0}>
          {/* Left Sidebar */}
          <Grid item xs={12} md={4} sx={{ padding: theme.spacing(6) }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Button
                variant="contained"
                color="secondary"
                sx={{ width: '80%', padding: theme.spacing(2), borderRadius: theme.shape.borderRadius }}
              >
                Search Properties
              </Button>
            </Box>
          </Grid>

          {/* Main Image Section */}
          <Grid item xs={12} md={8} sx={{ position: 'relative', overflow: 'hidden' }}>
            <Box
              component="img"
              src="/house-image.jpeg"
              sx={{
                width: '100%',
                height: '75vh',
                objectFit: 'fill',
                borderBottomLeftRadius: '100px',
              }}
            />
          </Grid>

          <Grid container spacing={2} sx={{ marginTop: theme.spacing(-2), padding: theme.spacing(2) }}>
            <Grid item xs={12}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                Popular Properties
              </Typography>
            </Grid>

            {/* Property Cards */}
            {[
              { name: 'The Retreat', reviews: '270+', logo: '/the-retreat.jpeg', link: 'https://www.retreatatblacksburg.com/' },
              { name: 'Alight Homes', reviews: '140+', logo: '/alight.jpeg', link: 'https://alight-blacksburg.com/' },
              { name: 'Foxridge Apartments', reviews: '180+', logo: '/foxridge.jpeg', link: 'https://www.foxridgeliving.com/' },
              { name: 'The Hub', reviews: '150+', logo: '/the-hub.png', link: 'https://huboncampus.com/blacksburg/' },
            ].map((property, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    padding: theme.spacing(2),
                    backgroundColor: '#fff',
                    borderRadius: '25px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={property.logo}
                    alt={property.name}
                    sx={{ height: '80px', marginBottom: theme.spacing(2) }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {property.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'gray' }}>
                    {property.reviews} Reviews
                  </Typography>
                  <Button
                    href={property.link}
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: theme.spacing(2), width: '100%' }}
                  >
                    Check Property
                  </Button>
                </Box>
              </Grid>
            ))}

            {/* Explore All Button */}
            <Grid item xs={12} sx={{ textAlign: 'right' }}>
              <Button variant="text" color="primary">
                Explore All
              </Button>
            </Grid>

            <Grid container spacing={2} sx={{ marginTop: theme.spacing(-4), padding: theme.spacing(2), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Google Maps Autocomplete Search Bar */}
              {isLoaded && (
                <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#E8F0F2', borderRadius: '45px', padding: '8px 16px', maxWidth: '600px', width: '100%' }}>
                  <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                    <InputBase
                      type="search"
                      placeholder="Search for a place..."
                      style={{
                        width: '550px',
                        flex: 1,
                        padding: '10px',
                        borderRadius: '30px',  // Rounded corners
                        border: '1px solid #ccc',  // Subtle border
                        backgroundColor: 'white',  // White background as per the design
                        color: '#333',  // Text color for contrast
                        fontSize: '16px',
                      }}
                    />
                  </Autocomplete>

                  <Button
                    variant="contained"
                    sx={{
                      marginLeft: '8px',
                      padding: '8px 16px',
                      borderRadius: '30px', // Make the button rounded
                      backgroundColor: '#00796b', // Button color matching your design
                      color: 'white', // Icon color
                      minWidth: '48px',
                      height: '48px',
                    }}
                  >
                    <SearchIcon />
                  </Button>
                </div>
              )}

              {/* Google Map Display */}
              {isLoaded && (
                <div style={{ marginTop: theme.spacing(4), marginLeft: theme.spacing(4), width: '100%', height: '400px' }}> {/* Ensure proper map dimensions */}
                  <GoogleMap
                    center={center}
                    zoom={12}
                    mapContainerStyle={{ width: '100%', height: '100%' }} // Ensure the map occupies the full container
                  >
                    {/* You can add additional map components here, like markers */}
                  </GoogleMap>
                </div>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider >
  );
}

export default App;
