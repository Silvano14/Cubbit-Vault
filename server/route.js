const DB_COONNECTION = require('./const');
const MongoClient = require('mongodb').MongoClient


async function routes(fastify, options) {

    fastify.post('/', async (request, reply) => {

        const mongodb = require('mongodb')
        MongoClient.connect(DB_COONNECTION, function (err, db) {
            if (err) throw err;
            var dbo = db.db("files");

            if (request.body) {
                const { body } = request;
                if (body) {
                    const { fileName, content } = body;
                    var myobj = { fileName, content };
                    dbo.collection("files").insertOne(myobj, function (err, res) {
                        if (err) throw err;
                        console.log("1 document inserted");
                        db.close();
                    });
                }
            }
        });
        return { header: 'prova' }
    })
}

module.exports = routes