const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require("passport");
const cors =require('cors')

const users = require("./routes/api/users");
const movies = require("./routes/api/movies");
const app = express();
app.use(cors())

app.use(
    bodyParser.urlencoded({
        extended:false
    })
);

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
    .connect(
        db,
        {useNewUrlParser : true}
    )
    .then(() => {
        console.log("Mongo DB connected successfully");
    })
    .catch((err) => {
        console.log(err);
    })

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/", users);
app.use("/movies", movies);

const port = process.env.PORT || 5000;

app.listen(port, ()=> {
    console.log(`Server up and running at port ${port}`);
})