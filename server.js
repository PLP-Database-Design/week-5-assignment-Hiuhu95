// Importing Dependancies
const express = require("express")
const app = express()
const mysql = require('mysql2');
const dotenv = require('dotenv');


//  configure environment variables
dotenv.config();


// Create a connection object
const db = mysql.createConnection({
host: process.env.DB_HOST,
user: process.env.DB_USERNAME,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME
})


// Testing the Connection
db.connect((err) => {
    // if the connection is not successful
    if(err) {
       return console.log("Error Connecting to the database", err)
    }

    // if the connection is successful
    console.log("Successfully connected to MySQL: ", db.threadId)
})



//  1. retrieve all patients
app.get('/patients', (req, res) => {
    const getPatients = "SELECT * FROM patients"
    db.query(getPatients, (err, data) => {
        //  if I have an error
        if(err) {
            return res.status(400).send("Failed to get patients")
        }

        res.status(200).send(data)
    })
})

//  2. retrieve all providers
app.get('/providers', (req, res) => {
    const getProviders = "SELECT * FROM providers"
    db.query(getProviders, (err, data) => {
        //  if I have an error
        if(err) {
            return res.status(400).send("Failed to get providers")
        }

        res.status(200).send(data)
    })
})

//  3. filter patients by first name
app.get('/patients_first_name', (req, res) => {
    const getPatients = "SELECT first_name FROM patients"
    db.query(getPatients, (err, data) => {
        //  if I have an error
        if(err) {
            return res.status(400).send("Failed to get first_name FROM patients")
        }

        res.status(200).send(data)
    })
})

//  4. retrieve all providers by their specialty
app.get('/provider_specialty', (req, res) => {
    const getProviders = "SELECT provider_specialty FROM providers;"
    db.query(getProviderspecialty, (err, data) => {
        //  if I have an error
        if(err) {
            return res.status(400).send("Failed to get provider_specialty")
        }

        res.status(200).send(data)
    })
})


// Start and listen to servers
const PORT = 3300
app.listen(3300, () => {
    console.log(`server is running on http://localhost:${3300}`)
})