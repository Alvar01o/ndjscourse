// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const {MongoClient , ObjectID } = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const database = 'task-manager'

 // const id  = new ObjectID()
 // console.log(id)
 // console.log(id.getTimestamp())
MongoClient.connect(connectionURL , { useNewUrlParser: true }, (error, client ) => {
    if  (error) {
        return console.log("Unable to connect to database")
    }

    const db = client.db(database)

    db.collection('users').deleteOne({name:'Jen'}).then((result)=> {
        console.log(result.deletedCount)
    }).catch((error)=>{
        console.log(error)
    })
//    db.collection('users').deleteMany({age : 27}).then((result)=> {
//        console.log(result.deletedCount)
//    }).catch((error)=>{
//        console.log(error)
//    })
// UPDATE DATA
//    db.collection('task').updateMany({completed: false} , {
//        $set : {
//            completed : true
//        }
//    }).then((result)=> {
//        console.log(result)
//    }).catch((error)=> {
//        console.log(error)
//    })
//    db.collection('users').updateOne({_id: new ObjectID('5cd782c0c1645e518000910b')} , {
//        $set : { 
//            name:'Mikeke'
//        }, 
//        $inc: {
//            age : 1
//        }
//    }).then((result)=> {
//        console.log(result)
//    }).catch((error)=> {
//            console.log(error)
//    })
//  READ DATA
//    db.collection('users').findOne({name:'Alvaro'}, (error, user) => {
//        if (error){
//            console.log('Unable to fetch user ')
//        }
//        console.log(user)
//    })
//
//    db.collection('users').find({age:27}).toArray((error, users) => {
//        if (error){
//            console.log('Unable to fetch Users ')
//        }
//        console.log(users)
//    })
//    db.collection('task').find({completed:true}).toArray( (error , tasks) => {
//        if (error){
//            console.log('Unable to fetch Tasks ')
//        }
//        console.log(tasks)        
//    })
//  FUNCTIONS TO INSERT DATA    
//    db.collection('users').insertOne({
//        _id :id ,
//        name: "Alvaro 23",
//        age: 27
//    }, (error , result) => {
//        if  (error) {
//            return console.log("Unable to insert User")
//        }        
//
//        console.log(result.ops) 
//    })
//
//     db.collection('task').insertMany([
//         {
//         description:'task #1',
//         completed:false
//         },{
//             description:'task #2',
//             completed:true
// 
//         },{
//             description:'task #3',
//             completed:true    
//         }
//     ], (error , result) => {
//         if  (error) {
//             return console.log("Unable to insert Documents")
//         }        
// 
//         console.log(result.ops) 
//     })
})