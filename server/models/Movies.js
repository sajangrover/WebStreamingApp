const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    name: {
        type: String,
        required: true 
    },
    link: {
        type: String,
        required: true 
    },
    ontime: {
        type: Number,
        required: true 
    }
});

module.exports = Movies = mongoose.model("movies", MovieSchema);