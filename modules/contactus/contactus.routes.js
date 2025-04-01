const router = require('express').Router();

const { addContactUs, getContactUs } = require('./controller/contactus.controller');
router.post('/addContact', addContactUs);
router.post('/getContact', getContactUs);
router.get("/test", (req, res) => {
    res.send("test")
})

module.exports = router;