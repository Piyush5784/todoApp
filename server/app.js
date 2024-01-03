const express = require("express");
const { todoModel } = require("./schema");
const app = express();
const port = 3002;
const mongoose = require('mongoose');
const { create, update, read, deleteTodo } = require("./methods");
const cors = require("cors")

mongoose.connect("mongodb+srv://(your Id):(your password)cluster0.pr5l8do.mongodb.net/TodoList").then(() => {
    console.log("Connected to DB")
    app.listen(port, () => {
        console.log("Server Started")
    })
}).catch((error) => console.log("error connecting to server" + error))

app.use(express.json())

app.use(cors())

///Create
app.post("/addtodo", create)

//Update
app.put("/editTodo", update)

//Read
app.get('/todos', read)

//delete
app.delete("/deleteTodo/:id", deleteTodo)


app.use((err, req, res) => {
    console.log(err)
})




