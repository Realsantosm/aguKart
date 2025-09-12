import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

// const express = require('express');
// const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})