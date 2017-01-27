module.exports = function (app, model) {

    // data APIs AJAX requests from client services
    app.get("/wax/:applicationName/api/application", application);
    app.get("/wax/:applicationName/api/:entityName", findAll);
    app.get("/wax/:applicationName/api/:entityName/:entityId", findById);
    app.post("/wax/:applicationName/api/:entityName", insert);
    app.put("/wax/:applicationName/api/:entityName/:entityId", update);
    app.delete("/wax/:applicationName/api/:entityName/:entityId", remove);

    function application(req, res) {
        var applicationName = req.params.applicationName;
        var application = model.findApplicationByName(req.params.applicationName);
        res.json(application);
    }
    
    function insert(req, res) {
        var applicationName = req.params.applicationName;
        var entityName = req.params.entityName;
        var instance = req.body;
        model
            .create(entityName, instance)
            .then(function(doc){
                res.json(doc);
            }, function (err) {
                res.sendStatus(400).send(err);
            })
    }

    function findById(req, res) {
        var applicationName = req.params.applicationName;
        var entityName = req.params.entityName;
        var entityId = req.params.entityId;
        model
            .findById(entityName, entityId)
            .then(function(doc){
                res.json(doc);
            }, function (err) {
                res.sendStatus(400).send(err);
            })
    }

    function findAll(req, res) {
        var applicationName = req.params.applicationName;
        var entityName = req.params.entityName;
        model
            .findAll(entityName)
            .then(function(docs){
                res.json(docs);
            }, function (err) {
                res.sendStatus(400).send(err);
            })
    }


    function update(req, res) {
        var applicationName = req.params.applicationName;
        var entityName = req.params.entityName;
        var instance = req.body;
        var entityId = req.params.entityId;
        model
            .update(entityName, entityId, instance)
            .then(function(status){
                res.json(status);
            }, function (err) {
                res.sendStatus(400).send(err);
            })
    }
    
    function remove(req, res) {
        var applicationName = req.params.applicationName;
        var entityName = req.params.entityName;
        var entityId = req.params.entityId;
        model
            .remove(entityName, entityId)
            .then(function(status){
                res.json(status);
            }, function (err) {
                res.sendStatus(400).send(err);
            });
    }
};