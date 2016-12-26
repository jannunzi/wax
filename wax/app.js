module.exports = function (app) {

    var model = require("./models/wax.model.server")();

    require("./services/user.service.server")(app, model);

    // data APIs AJAX requests from client services
    require("./services/wax.service.server")(app, model);

    // map related requests
    // read/write map
    require("./models/wax.map.model.server")(app, model);

    // requests for static client content such as
    // index.html, app.js, config.js, html templates, client controllers, client services
    require("./controllers/wax.controller.server")(app, model);
};