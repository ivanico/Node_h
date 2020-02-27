const services = require('./services');

function routes(server){
    server.get( '/' , services.getInitiealRoute)

    server.get('/books-table', services.getBooks)

}

module.exports = routes;