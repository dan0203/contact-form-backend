const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    console.log('METHOD:', req.method);
    console.log('URL:', req.originalUrl);
    console.log('PATH:', req.path);
    next();
});

app.post('/contact-form', (req, res) => {
    try {
        res.status(201).json('form received');
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
