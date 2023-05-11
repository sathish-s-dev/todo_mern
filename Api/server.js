const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors');

const Todo = require('./modals/Todo')

Port = 3001;

const app = express();
app.use(cors());

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/Todos', {
    useNewUrlParser : true,
    useUnifiedTopology: true,
})
.then(console.log("connected to mongoDB Succesfully"))
.catch((error)=>console.error(error))

// const corsOptions = {
// origin: 'https://localhost:3000/'
// }

app.get('/todos',async (req,res)=>{
    const todos = await Todo.find()
    res.json(todos)
})

app.post('/todo/new', async(req, res) =>{
    const tododata = req.body.body
    const todo = new Todo({
        name: req.body.name,
        description: req.body.description,
    })
    await todo.save()
    console.log(req.body)
    res.json(todo)
})

app.get('/download', async(req, res) => {
        const todos = await Todo.find()
    res.download('./package.json')})


app.get('/todo/complete/:id', async (req, res) => {
    const id = req.params.id
    const todo = await Todo.findById(id)
    todo.completed = !todo.completed,
    todo.save()
    res.send(todo)

})

app.get('/todo/delete/:id', async(req, res) => {
    const id = req.params.id
    const todo = await Todo.findByIdAndDelete(id)
    res.send(todo)
})


app.listen(Port, () => {
    console.log(`connected to server at Port: ${Port} and Listening`);
})
