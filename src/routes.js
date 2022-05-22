const { addNoteHandler } = require('./handler')

const routes = [
    {
        method: 'GET',
        path: '/notes',
        handler: addNoteHandler
    },
    {
        method: 'POST',
        path: '/notes',
        handler: (req, h) => {
            return "hallo"
        }
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: (req, h) => {
            return "hallo"
        }
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: (req, h) => {
            return "hallo"
        }
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: (req, h) => {
            return "hallo"
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (req, h) => {
            return "hallo"
        }
    },
]

module.exports = routes