const axios = require('axios');

const data = {};

const config = {
  method: 'post',
  url: 'http://d77fa08e-295a-4595-a2b5-ff777282a5b0.eastus2.azurecontainer.io/score',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + tHlyuLtbdIMI4df5bqPJMaaMsM0e2NVV
  },
  data : data
};

axios(config)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log("The request failed with status code: " + error.response.status);
    console.log(error.response.data);
  });