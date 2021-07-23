const DB_COONNECTION = require('./const');
const MongoClient = require('mongodb').MongoClient

async function routes(fastify, options) {
    const database = fastify.mongo.db('db')
    const collection = database.collection('test')

    fastify.get('/', async (request, reply) => {
        return { hello: 'world' }
    })

    fastify.get('/upload', async (request, reply) => {
        const mongodb = require('mongodb')
        MongoClient.connect(DB_COONNECTION, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            var myobj = { name: "Company Inc", address: "Highway 37" };
            dbo.collection("topo gigio").insertOne(myobj, function (err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
            });
        });
        return { tutto: 'ok' }
    })

    fastify.get('/search/:id', async (request, reply) => {
        const result = await collection.findOne({ id: request.params.id })
        if (result.value === null) {
            throw new Error('Invalid value')
        }
        return result.value
    })
}

module.exports = routes