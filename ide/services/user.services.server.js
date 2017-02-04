/**
 * Created by Nischay M on 2/1/2017.
 */

const app = require('../../server');
const model = require('../models/user/user.model.server');

app.post('/api/user', CreateNewUser);
app.get('/api/user?', findByQueryString); /* for login */
app.get('/api/user/:id', findUserByUserId);
app.put('/api/user/:id', updateUser);
app.delete('/api/user/:id', removeUserById);
app.get('/api/users/admin', getAllUsers);


function getAllUsers(req , res){
    model
        .getAllUsers()
        .then(function(result){
            res.json(result);
        });
}

function CreateNewUser (req, res) {

    console.log(req);
    const user = req.body;
    model
        .create(user)
        .then(function(newuser){
            res.json(newuser);
        });
}

function findUserByUserId (req, res) {
    console.log('inside find by ID');
    const userid = req.params.id;
    model
        .findUserByUserId(userid)
        .then(function(user){
            res.json(user);
        });
}

function findByQueryString(req,res)
{
    if(req.query.password == null && req.query.username == null) {
        //allUsers(req,res);
    }
    else if(req.query.password == null) {
        findByUsername(req,res);
    }
    else {
        findByCredentials(req,res);
    }
}

function findByUsername(req, res) {
    const username = req.query.username;
    model
        .findUserByUsername(username)
        .then(function(result){
            res.json(result);
        });
}

function findByCredentials(req, res) {

    const username = req.query.username;
    const password = req.query.password;
    model
        .findUserByCredentials(username,password)
        .then(function(user){
            res.json(user);
        });

}

function updateUser(req, res) {

    const userid = req.params.id;
    const user = req.body;
    model
        .update(user._id,user)
        .then(function(user){
            res.json(user);
        });
}


function removeUserById(req, res) {
    const userid = req.params.id;
    model
        .removeUserById(userid)
        .then(function(user){
            res.json(user);
        });
}

