const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const errorMiddleware = require("./middleware/error");

// Config
dotenv.config({ path: "backend/config/config.env" });

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Route Imports
const ProductsRoute = require("./routes/productRoute");
const UserRoute = require("./routes/userRoute");
const OrderRoute = require("./routes/orderRoute");

app.use("/api/", ProductsRoute);
app.use("/api/", UserRoute);
app.use("/api/", OrderRoute);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
