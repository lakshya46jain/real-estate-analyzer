const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const API_URL = 'http://d77fa08e-295a-4595-a2b5-ff777282a5b0.eastus2.azurecontainer.io/score';
const API_KEY = 'tHlyuLtbdIMI4df5bqPJMaaMsM0e2NVV'; 
const GOOGLE_MAPS_API_KEY = 'AIzaSyDJJLsCIudPBKKhEOBrAJYsdG2e_zeUJNo';

// Endpoint to handle the data and return state, city/province, and price
app.post('/predict-sale-value', async (req, res) => {
  const { latitude, longitude } = req.body; // Input data (from frontend)

  try {
    // Fetch address details using Google Maps Geocoding API
    const geocodeResponse = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
      params: {
        latlng: `${latitude},${longitude}`,
        key: GOOGLE_MAPS_API_KEY
      }
    });

    const addressComponents = geocodeResponse.data.results[0].address_components;
    const state = addressComponents.find(component => component.types.includes('administrative_area_level_1')).long_name;
    const city = addressComponents.find(component => component.types.includes('locality') || component.types.includes('administrative_area_level_2')).long_name;

    // Prepare the request config for the Azure API
    const config = {
      method: 'post',
      url: API_URL,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + API_KEY,
      },
      data: { latitude, longitude }
    };

    // Call Azure API with the input data
    const azureResponse = await axios(config);
    const predictedPrice = azureResponse.data; // Extract sale value from response

    // Send back state, city/province, and price
    res.json({
      location: {
        state: state,
        city: city,
        latitude: latitude,
        longitude: longitude
      },
      price: predictedPrice
    });
  } catch (error) {
    res.status(500).json({
      error: 'The request failed',
      details: error.message
    });
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
