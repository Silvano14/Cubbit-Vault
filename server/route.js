const DB_COONNECTION = require('./const');
const MongoClient = require('mongodb').MongoClient
const { v4: uuidv4 } = require('uuid');
var aes256 = require('aes256');

async function routes(fastify, options) {
    const id = uuidv4();
    const key = uuidv4();
    var cipher = aes256.createCipher(key);

    const database = fastify.mongo.db('files')
    const collection = database.collection('files')

    fastify.post('/upload', async (request, reply) => {

        const mongodb = require('mongodb')
        MongoClient.connect(DB_COONNECTION, function (err, db) {
            if (err) throw err;
            var dbo = db.db("files");

            if (request) {
                const { body } = request;
                if (body) {
                    const { content, ...rest } = body;
                    var encryptedPlainText = cipher.encrypt(content);
                    dbo.collection("files").insertOne({ content: encryptedPlainText, ...rest, _id: id }, function (err, res) {
                        if (err) throw err;
                        db.close();
                    });
                }
            }
        });
        return { id, key };
    })

    fastify.get('/download/:id', async (request, reply) => {
        const mongodb = require('mongodb')
        let asd;
        MongoClient.connect(DB_COONNECTION, async function (err, db) {
            const result = await collection.findOne({ _id: request.params.id })
            reply.send(result);
        })
    });
}

module.exports = routes