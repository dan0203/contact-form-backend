const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/contact-form', (req, res) => {
    try {
        res.status(201).json('form received');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started');
});
