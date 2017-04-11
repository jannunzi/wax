module.exports = function () {

    var mongoose = require("mongoose");

    var WebsiteSchema = mongoose.Schema({
        _user: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
        owner: String,
        name: String,
        description: String,
        dateCreated: {type: Date, default: Date.now()}
    }, {collections: "website"});

    return WebsiteSchema;
};



