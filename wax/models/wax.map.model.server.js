module.exports = function (app, model) {

    // map related requests
    // read/write map
    app.put("/wax/:applicationName/api/:entityName/:entityId/:relatedEntityName/map", setMap);
    app.get("/wax/:applicationName/api/:entityName/:entityId/:relatedEntityName/map", getMap);
    // map list template and controller
    app.get("/wax/:applicationName/templates/:entityName/map/:relatedEntityName/:mapListTemplate", mapListTemplate)
    app.get("/wax/:applicationName/controllers/:entityName/map/:relatedEntityName/:mapListController", mapListController)

    function mapListController(req, res) {
        var applicationName = req.params.applicationName;
        var application = model.findApplicationByName(applicationName);
        var entityName = req.params.entityName;
        var entity = application.entities[entityName];
        var relatedEntityName = req.params.relatedEntityName;
        var relatedEntityNameCapitalized = capitalizeFirstLetter(relatedEntityName);
        var relatedEntity = entity.relations[relatedEntityName];
        var scope = {
            application: application,
            applicationName: applicationName,
            entity: entity,
            entityName: entityName,
            relatedEntityName: req.params.relatedEntityName,
            relatedEntityNameCapitalized: relatedEntityNameCapitalized,
            relatedEntity: entity.relations[relatedEntityName]
        };
        res.render("wax/mapListController", scope);
    }

    function mapListTemplate(req, res) {
        var applicationName = req.params.applicationName;
        var application = model.findApplicationByName(applicationName);
        var entityName = req.params.entityName;
        var entity = application.entities[entityName];
        var relatedEntityName = req.params.relatedEntityName;
        var relatedEntityNameCapitalized = capitalizeFirstLetter(relatedEntityName);
        var relatedEntity = entity.relations[relatedEntityName];
        var scope = {
            application: application,
            applicationName: applicationName,
            entity: entity,
            entityName: entityName,
            relatedEntityName: req.params.relatedEntityName,
            relatedEntityNameCapitalized: relatedEntityNameCapitalized,
            relatedEntity: entity.relations[relatedEntityName]
        };
        res.render("wax/mapListTemplate", scope);
    }

    function setMap(req, res) {
        var entityName = req.params.entityName;
        var entityId = req.params.entityId;
        var relatedEntityName = req.params.relatedEntityName;
        var relatedEntityIds = req.body;
        model
            .setMap(entityName, entityId, relatedEntityName, relatedEntityIds)
            .then(function(status){
                res.json(status);
            }, function (err) {
                res.sendStatus(400).send(err);
            });
    }

    function getMap(req, res) {
        var entityName = req.params.entityName;
        var entityId = req.params.entityId;
        var relatedEntityName = req.params.relatedEntityName;
        model
            .getMap(entityName, entityId, relatedEntityName)
            .then(function(relatedEntityInstances){
                res.json(relatedEntityInstances);
            }, function (err) {
                res.sendStatus(400).send(err);
            });
    }
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
};