module.exports = function () {

    var mongoose = require('mongoose');
    var connectionString = process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://127.0.0.1:27017/genXapp';
    mongoose.connect(connectionString);

    var userModel = require("./user/user.model.server.js")();
    var websiteModel = require("./website/website.model.server.js")();

    var model = {
        userModel: userModel,
        websiteModel: websiteModel
    };

    userModel.setModel(model);
    websiteModel.setModel(model);
    return model;

};