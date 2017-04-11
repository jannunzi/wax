module.exports = function (app, model) {

    app.post('/api/user/:userId/page', createPage);
    app.get('/api/user/:userId/page', findAllPagesForUser);
    app.get('/api/page/:pageId', findPageById);
    app.put('/api/page/:pageId', updatePage);
    app.delete('/api/page/:pageId', deletePage);

    function createPage(req, res) {
        var userId = req.params.userId;
        var page = req.body;
        model.pageModel.createPageForUser(userId, page)
            .then(
                function (pageObj) {
                    res.send(pageObj)
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }

    function findAllPagesForUser(req, res) {
        var userId = req.params.userId;
        model.pageModel.findAllPagesForUser(userId)
            .then(
                function (pages) {
                    if (pages) {
                        res.json(pages);
                    } else {
                        res.send('0');
                    }
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }

    function findPageById(req, res) {
        var pageId = req.params.pageId;
        model.pageModel.findPageById(pageId)
            .then(
                function (pageObj) {
                    if (pageObj) {
                        res.json(pageObj);
                    } else {
                        res.send('0');
                    }
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }

    function updatePage(req, res) {
        var pageId = req.params.pageId;
        var page = req.body;
        model.pageModel.updatePage(pageId, page)
            .then(
                function (status) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            )
    }

    function deletePage(req, res) {
        var pageId = req.params.pageId;
        model.pageModel.deletePage(pageId)
            .then(
                function (status) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }
}
