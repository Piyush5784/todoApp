const { todoModel } = require("./schema")

async function create(req, res) {
    const { name, description } = req.body;
    try {
        await todoModel.create({
            name, description
        })
        res.json({ message: "success" })
    } catch (error) {
        console.log(error)
        res.json({ message: "Not added to todo" })
    }
}



async function update(req, res) {
    const { id, ...rest } = req.body;

    try {
        const todo = await todoModel.updateOne({
            _id: id
        }, rest)

        res.json({ message: "success", todoUpdate: todo.acknowledged })
    } catch (error) {
        console.log(error)
        res.json({ message: "Todo Not Updated" })
    }
}



async function read(req, res) {
    const todos = await todoModel.find({})
    res.json({ todos })
}




async function deleteTodo(req, res) {
    const { id } = req.params;
    try {
        const response = await todoModel.deleteOne({ _id: id });
        res.json({ message: "todo deleted", response: response })
    } catch (error) {
        console.log(error)
        res.json({ message: "Error deleting todo" })
    }
}

module.exports = { create, update, read, deleteTodo }