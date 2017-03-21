module.exports = function () {

    var mongoose = require("mongoose");

    var PageSchema = mongoose.Schema({
        name: String,
        description: String,
        dateCreated: {type: Date, default: Date.now()}
    }, {collections: "page"});

    return PageSchema;
};



