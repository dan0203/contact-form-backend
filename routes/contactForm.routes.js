const express = require('express');
const router = express.Router();
const contactFormController = require('../controllers/contactForm.controllers');

router.post('/', contactFormController.save);

module.exports = router;
