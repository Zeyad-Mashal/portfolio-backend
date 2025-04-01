const ContactUs = require('../../../DB/models/contactus.model');


const addContactUs = async (req, res) => {
    const { name, phone, email, message } = req.body;
    try {
        const newContactUs = await ContactUs.create({ name, phone, email, message });
        res.status(201).json(newContactUs);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getContactUs = async (req, res) => {
    const SECRET_CODE = "Zoro50501#"
    const { code } = req.body;
    if (code !== SECRET_CODE) {
        return res.status(403).json({ error: 'Forbidden' });
    }
    try {
        const contactUsList = await ContactUs.find();
        res.status(200).json(contactUsList);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    addContactUs,
    getContactUs
}