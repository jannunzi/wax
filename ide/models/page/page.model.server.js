module.exports = function () {

    var model = {};

    var mongoose = require("mongoose");
    var PageSchema = require("./page.schema.server")();
    var PageModel = mongoose.model("PageModel", PageSchema);

    var api = {
        createPageForUser: createPageForUser,
        findAllPagesForUser: findAllPagesForUser,
        findPageById: findPageById,
        updatePage: updatePage,
        deletePage: deletePage,
        setModel: setModel
    };
    return api;

    function setModel(_model) {
        model = _model;
    }

    function createPageForUser(userId, page) {

        return PageModel.create(page)
            .then(function (pageObj) {
                model.userModel.findUserById(userId)
                    .then(function (userObj) {
                        pageObj._user = userObj._id;
                        pageObj.save();
                        userObj.pages.push(pageObj);
                        return userObj.save();
                    }, function (error) {
                        console.log(error);
                    });
            });
    }

    function findAllPagesForUser(userId) {
        return PageModel.find(
            {_user: userId}
        );
    }

    function findPageById(pageId) {
        return PageModel.findById(pageId);
    }

    function updatePage(pageId, page) {
        return PageModel.update({
                _id: pageId
            },
            {
                name: page.name,
                description: page.description
            }
        );
    }

    function deletePage(pageId) {
        return PageModel.remove({_id: pageId});
    }

};
