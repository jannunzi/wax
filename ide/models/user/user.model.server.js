module.exports = function () {

    var model = {};

    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server")();
    var UserModel = mongoose.model("UserModel", UserSchema);

    var api = {
        createUser: createUser,
        findUserById: findUserById,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials,
        updateUser: updateUser,
        deleteUser: deleteUser,
        setModel: setModel,
        findUserByGoogleId: findUserByGoogleId
    };

    return api;

    function setModel(_model) {
        model = _model;
    }

    function createUser(user) {
        return UserModel.create(user);
    }

    function findUserById(userId) {
        return UserModel.findById(userId);
    }

    function findUserByUsername(username) {
        return UserModel.findOne({
            username: username
        });
    }

    function findUserByCredentials(username, password) {
        return UserModel.findOne({
            username: username,
            password: password
        });
    }

    function updateUser(userId, user) {
        return UserModel.update({
                _id: userId
            },
            {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone
            }
        );
    }

    function deleteUser(userId) {
        return UserModel.findOne(
            {_id: userId},
            function (err, user) {
                UserModel.remove({_id: userId})
                    .then(function () {
                    }, function (error) {
                        console.log(error);
                    });
            }, function (error) {
                console.log(error);
            });
    }

    function findUserByGoogleId(googleId) {
        return UserModel.findOne({'google.id': googleId});
    }

};
