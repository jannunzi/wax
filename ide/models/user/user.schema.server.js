/**
 * Created by Nischay M on 2/3/2017.
 */
module.exports = function () {
    var mongoose = require("mongoose");
    const UserSchema = new mongoose.Schema({
        username: String,
        firstname: String,
        lastname: String,
        email: String,
        password: String,
        state: String,
        city: String,
    }, {collection: "user"});
    return UserSchema;
};
