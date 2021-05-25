var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var Doc = require("./Docs.model");
var User = require("./User.model");

const port = 3000;

mongoose.connect("mongodb://localhost:27017/myDocs-mongoose", (err) => {
    if(!err)
        console.log("Server has been connected to mongodb");
});


app.post('/addUser', (req, res) => {
    console.log("Adiing new user!!");
    var userObj = {
        "_id": new mongoose.Types.ObjectId(),
        "name": req.body.name
    }

    var newUser = new User(userObj);
    newUser.save((err, user)=>{
        if(err)
            res.status(400).send("Error while adding new user");
        else
            res.status(200).json(user);
    })
});

app.post('/addDoc', (req, res) => {
    console.log("Adiing new Doc!!");
    var docObj = {
        "_id": new mongoose.Types.ObjectId(),
        "title": req.body.title,
        "description": req.body.description,
        "user": "kfjskfhjk"  //user_id that created in db
    }

    var newDoc = new Doc(docObj);
    newDoc.save((err, doc)=>{
        if(err)
            res.status(400).send(err);
        else
            res.status(200).json(doc);
    })
}); 


app.get('/docs/', (req, res)=>{
    console.log("Getting all docs");
    Doc.find({}).populate('user').exec((err, docs)=>{
        if(err)
            res.status(400).send(err);
        else
            res.status(200).json(docs);
    })
});

app.put('/docs/:id', (req,res)=>{
    console.log("editing a document");
    var docObj = {
        "title": req.body.title,
        "description": req.body.description
    }

    Doc.findByIdAndUpdate(req.params.id, docObj, {new:true}).exec((err,doc)=>{
        if(err)
            res.status(400).send(err);
        else
            res.status(200).json(doc);
    })
});


app.delete('/docs/:id', (req,res)=>{
    console.log("deleting a document");
    Doc.findByIdAndDelete(req.params.id).exec((err,doc)=>{
        if(err)
            res.status(400).send(err);
        else
            res.status(200).json(doc);
    })
});


app.listen(port, () =>{
    console.log("App is running on port: ", port);
});