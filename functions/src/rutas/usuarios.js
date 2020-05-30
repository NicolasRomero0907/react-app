const express = require('express')
const rutas = express.Router()
const firebase = require('firebase-admin')
const serviceAccount = require('./nicoapp-900ba-firebase-adminsdk-p0dfh-846cf38c5f.json') 

/*
var firebaseConfig = {
    apiKey: "AIzaSyADd4yzejiubBZDOhXwvtKjogboZswBHNk",
    authDomain: "nicoapp-900ba.firebaseapp.com",
    databaseURL: "https://nicoapp-900ba.firebaseio.com",
    projectId: "nicoapp-900ba",
    storageBucket: "nicoapp-900ba.appspot.com",
    messagingSenderId: "284295727585",
    appId: "1:284295727585:web:03b2a91a94deddb9c7aaa0",
    measurementId: "G-L8W1HTLV5P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);*/

firebase.initializeApp({

    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://nicoapp-900ba.firebaseio.com/"

})

var db = firebase.database()    

rutas.get('/', (req, res) => {

    res.send('la pija')

})

rutas.post('/nuevoUsuario', (req, res) => {

    db.ref('usuarios').push(req.body)
    res.send('/')
    console.log(req.body)

})

module.exports = rutas