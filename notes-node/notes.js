const fs = require('fs')
const chalk = require('chalk')


var addNote = (title , body) => {
	const notes = loadNotes()

	const duplicates = notes.filter( (note) => {
		return note.title === title 
	})
		debugger
	if (duplicates.length  === 0 ) {
		notes.push({
			title: title,
			body: body
		})
		saveNotes(notes)		
		console.log(chalk.green.inverse.bold("New note added."))
	} else {
		console.log(chalk.red.inverse.bold("Note title already exists."))
	}
}

const saveNotes = (notes) => {
	const dataJson = JSON.stringify(notes)
	fs.writeFileSync('notes.json',dataJson)
}
var getAll = () => {
	const notes = loadNotes()
	notes.forEach( (note) => {
		console.log( chalk.yellow.inverse.bold(note.title))
		console.log( chalk.yellow.bold(note.body))
	})

}

var removeNote = (title) => {

	const notes = loadNotes()

	const notesTokeep  = notes.filter( (note) => {
		return  note.title !== title
	})
	if (notes.length > notesTokeep.length) {
		saveNotes(notesTokeep)		
		console.log(chalk.green.inverse.bold("Note Removed."))
	} else {
		console.log(chalk.red.inverse.bold("Note not found."))		
	}

}

var readNote = (title) => {

	const notes = loadNotes()

	const noteToRead  = notes.find( (note) => {
		return  note.title === title
	})
	console.log( chalk.yellow.inverse.bold(noteToRead.title))
	console.log( chalk.yellow.bold(noteToRead.body))
}

const loadNotes  = () => {
		try	{
			const dataBuffer = fs.readFileSync('notes.json')
			const dataJson = dataBuffer.toString();
			return JSON.parse(dataJson)
		}catch (e) {
			return [];
		}
}

module.exports = {
	addNote ,
	getAll ,
	removeNote ,
	readNote
}
