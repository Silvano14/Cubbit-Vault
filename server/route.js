const DB_COONNECTION = require('./const');
const MongoClient = require('mongodb').MongoClient
const { v4: uuidv4 } = require('uuid');
const aes256 = require('aes256');
const fs = require('fs');
const path = require('path');

async function routes(fastify, options) {
    const database = fastify.mongo.db('files')
    const collection = database.collection('files')

    fastify.post('/upload', (request, reply) => {
        const id = uuidv4();
        const key = uuidv4();
        var cipher = aes256.createCipher(key);
        const mongodb = require('mongodb')
        MongoClient.connect(DB_COONNECTION, function (err, db) {
            if (err) throw err;
            var dbo = db.db("files");

            if (request) {
                const { body } = request;
                if (body) {
                    const { content, toSend, ...rest } = body;
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

    fastify.get('/find/:id', async (request, reply) => {
        const mongodb = require('mongodb')
        MongoClient.connect(DB_COONNECTION, async function (err, db) {
            const result = await collection.findOne({ _id: request.params.id })
            reply.send(result);
            db.close();
        })
    })

    fastify.post('/download', (request, reply) => {
        const mongodb = require('mongodb')
        var cipher = aes256.createCipher(request.body.key);

        MongoClient.connect(DB_COONNECTION, async function (err, db) {
            const result = await collection.findOne({ _id: request.body.id })
            fs.writeFile(`public/${result.fileName}`, cipher.decrypt(result.content), function (err) {
                if (err) throw err;
            });
            reply
                .header('Content-Disposition', `attachment; filename=${result.fileName}`)
                .sendFile(result.fileName, path.join(__dirname, 'public'));
            db.close();
        })
    })
}

module.exports = routes