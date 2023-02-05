const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));
};

module.exports = connectDatabase;
