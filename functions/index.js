//const functions = require('firebase-functions');
/*
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });*/

const express = require('express')
const app = express()
const path = require('path')

app.set('port', process.env.PORT || 3000)

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/proyecto', require('./src/rutas/usuarios.js'))

app.use(express.static(path.join(__dirname,'public')))

app.listen(app.get('port'), () => {

    console.log(`Escuchando el puerto ${app.get('port')}`)

})

