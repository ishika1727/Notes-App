const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
    return "Your notes..."
}

const addnote = (title, body) => {
    const notes = loadnotes()
    // const duplicatenotes = notes.filter((note) => {
    //     return note.title === title
    // })
    const duplicatenote = notes.find((note) => note.title === title)
    if (!duplicatenote) {
        notes.push({
            title: title,
            body: body
        })

        savenotes(notes)
    }
    else {
        console.log(chalk.bgRed("duplicate"))
    }
}

const removenote = (title) => {
    const notes = loadnotes()
    const notestokeep = notes.filter((note) => {
        return note.title !== title
    })
    if (notes.length > notestokeep.length) {
        console.log(chalk.bgGreen('note removed'))
    }
    else {
        console.log(chalk.bgRed('no note removed'))
    }
    savenotes(notestokeep)
}

const listnotes = () => {
    const notes = loadnotes()
    notes.map((note) => console.log(note.title))
}
const readnote = (title) => {
    const notes = loadnotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log("title:" + note.title)
        console.log("body:" + note.body)
    }
    else {
        console.log(chalk.bgRed("No such note"))
    }

}
const savenotes = (notes) => {
    const notestring = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notestring)
}

const loadnotes = () => {
    try {
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }

}

module.exports = {
    getNotes: getNotes,
    addnote: addnote,
    removenote: removenote,
    listnotes: listnotes,
    readnote: readnote
}