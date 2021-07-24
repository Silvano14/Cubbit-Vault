const DB_COONNECTION = require('./const');
const cors = require('cors')

const fastify = require('fastify')({
    logger: true
})

fastify.register(require('fastify-cors'), {
    origin: (origin, cb) => {
        if (/localhost/.test(origin)) {
            //  Request from localhost will pass
            cb(null, true)
            return
        }
        // Generate an error on other origins, disabling access
        cb(new Error("Not allowed"))
    }
})

fastify.register(require('./db-connector'), {
    url: DB_COONNECTION,
})

fastify.register(require('./route'))

fastify.listen(3001, '0.0.0.0', function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})

