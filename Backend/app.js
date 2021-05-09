const express = require('express');
const dbconnect = require("./databaseConfig")
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
    dbconnect.getConnection().connect(function(err){
       if(err){
           console.log(err)
       }else{
           console.log("Connection Successful")
       }
    })
})

module.exports = {app}