module.exports = function(app) {

    var model = require("./models/model.server.js")();

    require("./services/user.services.server")(app, model);
    require("./services/website.service.server")(app, model);
};