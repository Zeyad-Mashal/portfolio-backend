const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const port = 5000;
const { addContactUs, getContactUs } = require("./routes/routes");
const initConnection = require("./DB/config");


// Initialize database connection
initConnection();

// Use routes
app.use(addContactUs, getContactUs);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));