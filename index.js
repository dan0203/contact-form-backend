const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

const contactFormRoutes = require('./routes/contactForm.routes');
app.use('/contact-form', contactFormRoutes);

app.all(/.*/, (req, res) => {
    res.status(500).json('The route does not exist');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started');
});
