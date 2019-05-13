
const mongoose = require('mongoose')
const validator = require('validator')


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


module.exports=User