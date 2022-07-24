const express = require("express");

const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

mongoose.connect('mongodb://localhost:27017/social', {useNewUrlParser: true}, () => {
    // console.log(db);
    console.log("Connected to MongoDB");
});


app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.get('/', (req, res) => {
    res.send("welcome to homepage");
})

app.listen(8000, () => {
    console.log("Backend server is running");
})

