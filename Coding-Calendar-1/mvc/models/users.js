const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    addedContests: [Number]
});

const contestSchema = new mongoose.Schema({
    host: String,
    id: {
        type: Number,
        unique: true
    },
    link: {
        type: String,
        unique: true
    },
    event: String,
    start: Date,
    end: Date
});

mongoose.model("User", userSchema);
mongoose.model("Contest", contestSchema);