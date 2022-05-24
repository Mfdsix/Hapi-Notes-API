const { nanoid } = require('nanoid')
const notes = require('./notes')

const getAllNotesHandler = () => {
    return {
        status: 'success',
        data: {
            notes
        }
    }
}

const getNoteByIdHandler = (req, h) => {
    const { id } = req.params

    const note = notes.filter((note) => note.id === id)[0]

    if (note)
        return {
            status: 'success',
            data: {
                note
            }
        }

    return h.response({
        status: 'fail',
        message: 'Catatan Tidak Ditemukan'
    }).code(404)
}

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
    return isSuccess ? h.response({
        status: "success",
        message: "Catatan berhasil ditambahkan",
        data: {
            noteId: id,
        }
    }).code(201) : {
        status: "error",
        message: "Catatan gagal untuk ditambahkan"
    }
}

const editNoteByIdHandler = (req, h) => {
    const { id } = req.params
    const { title, tags, body } = req.payload
    const updatedAt = new Date().toISOString()
    const noteIndex = notes.findIndex((note) => note.id === id)

    if (noteIndex !== -1) {
        notes[noteIndex] = {
            ...notes[noteIndex],
            title,
            tags,
            body,
            updatedAt
        }
        return {
            status: "success",
            message: "Catatan berhasil diperbarui"
        }
    }

    return h.response({
        status: 'fail',
        message: 'Gagal memperbarui catatan. Id catatan tidak ditemukan'
    }).code(404)
}

const deleteNoteByIdHandler = (req, h) => {
    const { id } = req.params
    const noteIndex = notes.findIndex((note) => note.id === id)

    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1)
        return {
            status: "success",
            message: "Catatan berhasil dihapus"
        }
    }

    return h.response({
        status: 'fail',
        message: 'Catatan gagal dihapus. Id catatan tidak ditemukan'
    }).code(404)
}

module.exports = {
    getAllNotesHandler,
    getNoteByIdHandler,
    addNoteHandler,
    editNoteByIdHandler,
    deleteNoteByIdHandler
}