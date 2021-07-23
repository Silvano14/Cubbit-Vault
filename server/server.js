const fastify = require('fastify')({
    logger: true
})

fastify.register(require('./db-connector'), {
    url: 'mongodb://172.17.0.2:27017/'
})
fastify.register(require('./route'))

fastify.listen(3000, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})