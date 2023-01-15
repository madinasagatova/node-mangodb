const mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: "This field id required"
    },
    email: {
        type: String,
        require: "This field is required"
    },
    mobile: {
        type: Number,
        require: "This field is required"
    },
    city: {
        type: String,
        require: "This field is required",
    },
});

mongoose.model("Student", studentSchema);