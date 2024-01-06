var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;

var connectionString = "mongodb://localhost:27017";

var app = express();

app.get("/getUsers",(req,resp)=>{
    mongoClient.connect(connectionString, (err,clientObj)=>{
        if(!err){
            var database =clientObj.db("fakestore_api");
            database.collection("users").find({}).toArray((err, document)=>{
                if(!err){
                    resp.send(document);
                }
            })
        }
    })
});

app.listen(8000,() => {
    console.log("Server is listening on port 8000");
  });
