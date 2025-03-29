const mongoose = require("mongoose");

const initConnection = () => {
    return mongoose.connect('mongodb+srv://zyadomar112:lsLHBs9cf4DhTJye@my-portfolio.kzrvggg.mongodb.net/')
        .then(() => console.log("Connected DB."))
        .catch((err) => console.log("Error In Connection", err));
}

module.exports = initConnection;
