const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const port = 5000;

const app = express();
dotenv.config();


// Database connection
mongoose.connect("mongodb+srv://moontech:0FxSJMWiLqVt7zhq@cluster0.rj3a1df.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("connection successful!"))
    .catch((err) => console.log(err))

// request parser
app.use(express.json())
app.use(express.json(express.urlencoded({ extended: true })))

// set view engine
app.set("view engine", "ejs")

// set static
app.use(express.static(path.join(__dirname, "public")))
// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET))


// routing setup

// Error handling

app.listen(port, () => {
    console.log(`app listening to port ${port}`);
})