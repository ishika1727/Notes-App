const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')

//add remove read list

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addnote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removenote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list a new note',
    handler: function () {
        notes.listnotes()
    }
})
yargs.command({
    command: 'read',
    describe: 'read a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.readnote(argv.title)
    }
})
yargs.parse()
