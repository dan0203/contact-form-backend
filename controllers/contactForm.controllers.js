const contactFormService = require('../services/contactForm.services');

const save = async (req, res) => {
    try {
        if (!req.body.name || !req.body.email || !req.body.phone || !req.body.message || !req.body.referral || !req.body.reply || !req.body.terms) {
            return res.status(400).json('All answers are mandatory');
        }

        const newContact = await contactFormService.save(req.body);

        res.status(201).json(newContact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { save };
