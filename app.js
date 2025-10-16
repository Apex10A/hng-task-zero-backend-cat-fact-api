require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Welcome! Go to /me to see your profile info.');
});

app.get('/me', async (req, res) => {
  try {
    const response = await axios.get(`${process.env.API_URL}`, { timeout: 1000 });
    const data = {
      status: 'success',
      user: {
        email: 'pafolabi740@gmail.com',
        name: 'Praise Afolabi',
        stack: 'Node.js/Express',
      },
      timestamp: new Date().toISOString(), 
      fact: response?.data?.fact             
    };
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching cat fact:', error.message);
    const fallbackResponse = {
      status: 'success',
      user: {
        email: 'mybackupmail@gmail.com',
        name: 'Backup User',
        stack: 'Node.js/Express',
      },
      timestamp: new Date().toISOString(),
      fact: 'Yo, I can\'t get cat fact right now. Try again later!'
    };
    res.status(200).json(fallbackResponse);
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
