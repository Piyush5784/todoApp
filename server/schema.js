const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: String,
    description: String
})


const todoModel = mongoose.model("list", schema);


module.exports = { todoModel };