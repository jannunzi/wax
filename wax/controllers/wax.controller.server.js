module.exports = function (app, model) {

    app.get("/wax/:applicationName/authenticationControllers.js", authenticationControllers);
    // requests for static client content such as
    // index.html, app.js, config.js, html templates, client controllers, client services
    app.get("/wax/:applicationName/index.html", indexController);
    app.get("/wax/:applicationName", indexController);
    app.get("/wax/:applicationName/app.js", appController);
    app.get("/wax/:applicationName/config.js", configController);

    // TODO: move this to entity specific route handler
    app.get("/wax/:applicationName/entities/:entityName/list/templates/:listTemplate", listTemplate);
    app.get("/wax/:applicationName/entities/:entityName/list/controllers/:listController", listController);
    app.get("/wax/:applicationName/entities/:entityName/details/templates/:detailsTemplate", detailsTemplate);
    app.get("/wax/:applicationName/entities/:entityName/details/controllers/:detailsController", detailsController);
    app.get("/wax/:applicationName/entities/:entityName/services/:serviceJS", service);

    function authenticationControllers(req, res) {
        var applicationName = req.params.applicationName;
        var application = model.findApplicationByName(req.params.applicationName);
        var scope = {
            applicationName: applicationName,
            application: application
        };
        res.setHeader('content-type', 'text/javascript');
        res.render("wax/authenticationControllers.ejs", scope);
    }
    
    function service(req, res) {
        var applicationName = req.params.applicationName;
        var application = model.findApplicationByName(req.params.applicationName);
        var entityName = req.params.entityName;
        var entityNameCapitalized = capitalizeFirstLetter(entityName);
        var entity = application.entities[entityName];

        var scope = {
            applicationName: applicationName,
            application: application,
            entityName: entityName,
            entityNameCapitalized: entityNameCapitalized,
            entity: entity,
            serviceJS: req.params.serviceJS
        };
        res.setHeader('content-type', 'text/javascript');
        res.render("wax/service.ejs", scope);
    }

    function listTemplate(req, res) {
        var applicationName = req.params.applicationName;
        var application = model.findApplicationByName(req.params.applicationName);
        var entityName = req.params.entityName;
        var entityNameCapitalized = capitalizeFirstLetter(entityName);
        var entity = application.entities[entityName];

        var scope = {
            applicationName: applicationName,
            entityName: entityName,
            entityNameCapitalized: entityNameCapitalized,
            entity: entity,
            listTemplate: req.params.listTemplate,
            application: application
        };
        res.setHeader('content-type', 'text/javascript');
        res.render("wax/listTemplate.ejs", scope);
    }

    function detailsTemplate(req, res) {
        var applicationName = req.params.applicationName;
        var application = model.findApplicationByName(applicationName);
        var entityName = req.params.entityName;
        var entityNameCapitalized = capitalizeFirstLetter(entityName);
        var detailsTemplate = req.params.detailsTemplate;
        var scope = {
            applicationName: applicationName,
            entityName: entityName,
            entityNameCapitalized: entityNameCapitalized,
            detailsTemplate: detailsTemplate,
            application: application
        };
        res.setHeader('content-type', 'text/javascript');
        res.render("wax/detailsTemplate.ejs", scope);
    }

    function detailsController(req, res) {
        var applicationName = req.params.applicationName;
        var application = model.findApplicationByName(applicationName);
        var entityName = req.params.entityName;
        var entityNameCapitalized = capitalizeFirstLetter(entityName);
        var entity = application.entities[entityName];

        var scope = {
            applicationName: applicationName,
            entityName: entityName,
            entityNameCapitalized: entityNameCapitalized,
            entity: entity,
            detailsController: req.params.detailsController,
            application: application
        };
        res.setHeader('content-type', 'text/javascript');
        res.render("wax/detailsController.ejs", scope);
    }

    function listController(req, res) {
        var scope = {
            applicationName: req.params.applicationName,
            entityName: req.params.entityName,
            entityNameCapitalized: capitalizeFirstLetter(req.params.entityName),
            listController: req.params.listController,
            application: model.findApplicationByName(req.params.applicationName)
        };
        res.setHeader('content-type', 'text/javascript');
        res.render("wax/listController.ejs", scope);
    }

    function appController(req, res) {
        var application = model.findApplicationByName(req.params.applicationName);
        res.setHeader('content-type', 'text/javascript');
        res.render("wax/app.ejs", application);
    }

    function configController(req, res) {
        var application = model.findApplicationByName(req.params.applicationName);
        res.setHeader('content-type', 'text/javascript');
        res.render("wax/config.ejs", application);
    }

    function indexController(req, res) {
        var application = model.findApplicationByName(req.params.applicationName);
        res.render("wax/index.ejs", application);
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
};