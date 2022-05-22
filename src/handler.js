const { nanoid } = require('nanoid')
const notes = require('./notes')

const addNoteHandler = (req, h) => {
    const { title, tags, body } = req.payload

    const id = nanoid(16)
    const createdAt = new Date().toISOString()
    const updatedAt = createdAt

    const newNote = {
        id,
        title,
        tags,
        body,
        createdAt,
        updatedAt
    }

    notes.push(newNote)
    const isSuccess = notes.filter(note => note.id == id).length > 0
    return isSuccess ? {
        status: "success",
        message: "Catatan berhasil ditambahkan",
        data: {
            noteId: id,
        }
    } : {
        status: "error",
        message: "Catatan gagal untuk ditambahkan"
    }
}

module.exports = {
    addNoteHandler
}