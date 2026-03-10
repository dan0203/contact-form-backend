const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const Contact = require('./models/Contact');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

app.post('/contact-form', async (req, res) => {
    try {
        if (!req.body.name || !req.body.email || !req.body.phone || !req.body.message || !req.body.referral || !req.body.reply || !req.body.terms) {
            return res.status(400).json('All answers are mandatory');
        }

        const newContact = new Contact({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message,
            referral: req.body.referral,
            reply: req.body.reply,
            terms: req.body.terms,
        });

        await newContact.save();

        res.status(201).json(newContact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.all(/.*/, (req, res) => {
    res.status(500).json('The route does not exist');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started');
});
