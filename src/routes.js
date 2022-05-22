const {
    getAllNotesHandler,
    getNoteByIdHandler,
    addNoteHandler,
    editNoteByIdHandler,
    deleteNoteByIdHandler
} = require('./handler')

const routes = [
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler
    },
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (_, h) => {
            return h.response({
                status: 'fail',
                message: 'Halaman tidak ditemukan'
            }).code(404)
        }
    },
]

module.exports = routes