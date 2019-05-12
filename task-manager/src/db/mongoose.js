const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {useNewUrlParser: true , useCreateIndex:true}  )

const User = mongoose.model('Users' , 
{
    name: {
        type: String,
        required:true,
        trim:true
    }, 
    password: {
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(!(value.length >= 6) ){
                throw new Error('Password is too short')
            } else if (value.toLowerCase().includes("password")){
                throw new Error('Password contains the word password ')
            }
        }
    },
    email: {
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error ('Invalid Email.')                
            }
        }
    },
    age: {
        type: Number,
        default:0,
        validate(value) {
            if (value < 0 ){
                throw new Error ('Age must be a positive number.')
            }
        }
    }
})

const Task = mongoose.model('Tasks' , 
{
    description: {
        type: String,
        trim:true,
        required : true
    }, 
    completed: {
        type: Boolean,
        default: false,

    }
})
const me = new User({
    name:'Mike', email:"testing-email@gmail.com", password: 'password123'
})

me.save().then(() => {
    console.log(me)
}).catch((error)=> {
    console.log(error)
})