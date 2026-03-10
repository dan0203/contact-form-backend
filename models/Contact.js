const mongoose = require('mongoose');

const Contact = mongoose.model('Contact', {
    name: String,
    email: String,
    phone: String,
    message: String,
    referral: String,
    reply: String,
    terms: Boolean,
});

module.exports = Contact;
