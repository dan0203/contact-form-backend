const Contact = require('../models/Contact');

const save = async data => {
    const newContactForm = new Contact({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        referral: data.referral,
        reply: data.reply,
        terms: data.terms,
    });

    await newContactForm.save();

    return newContactForm;
};

module.exports = { save };
