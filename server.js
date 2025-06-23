import express from 'express';
import mongoose from 'mongoose';

import {shortUrl,redirectUrl} from "./controllers/url.js"; 
import { short } from 'webidl-conversions';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect('mongodb://localhost:27017/URLShortner').then(() => {
  console.log('Connected to MongoDB');}).catch(err => {
  console.error('Error connecting to MongoDB:', err);});


  app.post('/shorten', shortUrl);

  app.get('/:shortCode',redirectUrl )
     


  app.get('/', (req, res) => {
  res.render("index.ejs", { shortUrl: null });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});