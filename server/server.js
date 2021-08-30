const DB_COONNECTION = require('./const');
var path = require('path');

const fastify = require('fastify')({
    logger: true
})

fastify.register(require('fastify-cors'), {
    origin: (origin, cb) => {
        cb(null, true)
        return;
    }
})

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, '../public'),
})

fastify.register(require('./db-connector'), {
    url: DB_COONNECTION,
})

fastify.register(require('./route'))

fastify.listen(3001, '0.0.0.0', function(err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
});