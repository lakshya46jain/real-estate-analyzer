const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const API_URL = 'http://d77fa08e-295a-4595-a2b5-ff777282a5b0.eastus2.azurecontainer.io/score';
const API_KEY = 'tHlyuLtbdIMI4df5bqPJMaaMsM0e2NVV'; 

// Endpoint to handle the data and return sale value
app.post('/predict-sale-value', (req, res) => {
  const data = req.body; // Input data (from frontend)

  // Prepare the request config for the Azure API
  const config = {
    method: 'post',
    url: API_URL,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + API_KEY,
    },
    data: data
  };

  // Call Azure API with the input data
  axios(config)
    .then(function (response) {
      const predictedSaleValue = response.data; // Extract sale value from response
      // Send back location, address, and sale value
      res.json({
        location: {
          state: data.state,
          latitude: data.latitude,
          longitude: data.longitude
        },
        address: `State: ${data.state}, Latitude: ${data.latitude}, Longitude: ${data.longitude}`,
        sale_value: predictedSaleValue
      });
    })
    .catch(function (error) {
      res.status(500).json({
        error: 'The request failed',
        details: error.response.data
      });
    });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
