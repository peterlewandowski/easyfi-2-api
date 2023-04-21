const functions = require("firebase-functions");
import functions from 'firebase-functions'
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/test', (req, res) => {
    res.status(200).send({message: 'Success!'})
})

export const api = functions.https.onRequest(app)

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

