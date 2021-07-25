const DB_COONNECTION = require('./const');
const MongoClient = require('mongodb').MongoClient
const { v4: uuidv4 } = require('uuid');
var aes256 = require('aes256');

async function routes(fastify, options) {
    const id = uuidv4();
    const key = uuidv4();
    var cipher = aes256.createCipher(key);

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
}

module.exports = routes