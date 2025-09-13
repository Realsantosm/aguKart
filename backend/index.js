import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';

dotenv.config();

// const express = require('express');
// const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.use('/api/auth', authRoutes);


app.listen(PORT, () => {
    console.log(`Server is running 🏃‍♂️‍➡️ on http://localhost:${PORT}`);
    connectDB();
})