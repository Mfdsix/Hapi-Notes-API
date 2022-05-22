const Handler = require('./handler')

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (req, h) => {
            return "hallo"
        }
    }
]

module.exports = routes