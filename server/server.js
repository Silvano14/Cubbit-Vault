const DB_COONNECTION = require('./const');

const fastify = require('fastify')({
    logger: true
})

fastify.register(require('./db-connector'), {
    url: DB_COONNECTION,
})

fastify.register(require('./route'))

fastify.register(require('fastify-cors'), {
    origin: false
})

fastify.listen(3001, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})

