const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const port = 3000
const host = 'localhost'

const init = async ({ host, port }) => {
    const server = Hapi.server({
        host: host,
        port: port,
    })

    server.route(routes)
    server.start()
    console.log(`Server Started ${server.info.uri}`)
}

init({ host, port })