/**
 * Created by Nischay M on 2/3/2017.
 */
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username:String,
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    state:String,
    city:String,
},{collection:"users"});

module.exports = { UserSchema, mongoose};