const fs = require('fs');
const yargs = require('yargs')
//const _ = require('lodash');

const notes = require('./notes.js')


yargs.version("1.0.1")

// Create add command 

yargs.command({
	command : 'add',
	describe : 'Add a new note',
	builder : {
		title : {
			describe : "Note Title",
			demandOption: true,
			type : 'string'
		},
		body : {
			describe : "Note Body",
			demandOption: true,
			type : 'string'
		}
	},
	handler: function(argv){
		notes.addNote(argv.title , argv.body)
	}
})


// Create remove command 

yargs.command({
	command : 'remove',
	describe : 'Remove a note',
	builder : {
		title : {
			describe : "Note Title",
			demandOption: true,
			type : 'string'
		}
	},
	handler: function(argv){
		notes.removeNote(argv.title)
	}
})

// Create list command 

yargs.command({
	command : 'list',
	describe : 'List notes',
	handler: function(){
		notes.getAll()
	}
})


// Create reaad command 

yargs.command({
	command : 'read',
	describe : 'Read note',
	builder : {
		title : {
			describe : "Note Title",
			demandOption: true,
			type : 'string'
		}
	},
	handler: function(argv){
		notes.readNote(argv.title)
	}
})

yargs.parse()
//console.log(yargs.argv)