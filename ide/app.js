module.exports = function(app) {

    var model = require("./models/model.server")();

    require("./services/user.service.server")(app, model);
    require("./services/website.service.server")(app, model);
};