const fs = require('fs')
const book  = {
	title : "Ego is the Enemy",
	author : "Ryan Holiday"
}

//	const fileName = '1-json.json'
//	const jsonbook = JSON.stringify(book)
//	
//	const jsonObj = JSON.parse(jsonbook)
//	
//	fs.writeFileSync(fileName, jsonbook)
//	
//	const dataBuffer = fs.readFileSync(fileName)
//	const content = JSON.parse(dataBuffer.toString())
//	console.log(content.title)
//	
	const fileName = '1-json.json'
	const dataBuffer = fs.readFileSync(fileName)
	const jsonObj = JSON.parse(dataBuffer.toString())

	jsonObj.name = "Alvaro"
	jsonObj.age = 27	
	fs.writeFileSync(fileName, JSON.stringify(jsonObj))
	