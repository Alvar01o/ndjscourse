const express = require('express')
const moongose = require('./db/mongoose.js')
const User = require('./models/user')
const Task = require('./models/task')
const app = express()
const port = process.env.PORT || 3003

app.use(express.json())

app.listen(port , () => {
    console.log('Server is up on port ' + port)
})


app.get('/users', (req , res ) => {
    User.find({}).then((users)=>{
        res.send(users)
    }).catch((error)=>{
        res.status(404).send()
    })
})

app.post('/users', (req, res) => {
    const NewUser = new User(req.body)
    NewUser.save().then(()=>{
        res.status(201).send(NewUser)
    }).catch((error) => {
        res.status(400).send(error)
    })

})
app.get('/users/:id', (req, res) =>{
    const _id = req.params.id 
    User.findById(_id).then((user)=>{
        res.status(201).send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.get('/tasks/:id', (req, res) =>{
    const _id = req.params.id 
    Task.findById(_id).then((task)=>{
        res.status(201).send(task)
    }).catch((error) => {
        res.status(400).send(error)
    })

})

app.get('/tasks', (req , res ) => {
    Task.find({}).then((tasks)=>{
        res.send(tasks)
    }).catch((error)=>{
        res.status(404).send()
    })
})


app.post('/tasks', (req, res) => {
    const newTask = new Task(req.body)
    newTask.save().then(()=>{
        res.status(201).send(newTask)
    }).catch((error) => {
        res.status(400).send(error)
    })

})