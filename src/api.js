import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getItems = async () => {
  try {
    const response = await api.get('/items');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
import React, { useState, useEffect } from 'react';
import { getItems } from './api';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((items) => setItems(items));
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/your_database_name', (err, client) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Connected to MongoDB');
  }
});