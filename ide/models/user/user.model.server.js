/**
 * Created by Nischay M on 2/1/2017.
 */

module.exports = function () {

    var model = {};

    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server")();
    var UserModel = mongoose.model("UserModel", UserSchema);

    const q = require('q');
    const bcrypt = require('bcrypt-nodejs');


    var api = {
        create,
        getAllUsers,
        findById,
        findUserByUsername,
        findUserByCredentials,
        update,
        removeUserById,
        findUserByUserId,
        setModel
    };
    return api;

    function setModel(_model) {
        model = _model;
    }

    function create(user) {
        const deferred = q.defer();
        const newUser = user;
        console.log("New User creating: " + JSON.stringify(user));
        newUser.password = bcrypt.hashSync(newUser.password);
        UserModel.create(newUser, function (err, user) {
            deferred.resolve(user);
            console.log("New User creadted: ");
            console.log(user);
        });
        return deferred.promise;
    }

    function findUserByUserId(userid) {

        const deferred = q.defer();
        UserModel.findById(userid, function (err, user) {
            deferred.resolve(user);
        });
        return deferred.promise;
    }

    function findById(uid) {

        const deferred = q.defer();
        UserModel.find({userid: uid}, function (err, result) {
            deferred.resolve(0);
        });
        return deferred.promise;

    }

    function update(userid, user) {

        const deferred = q.defer();
        console.log('inside model update');
        console.log(user);
        console.log(userid);

        UserModel.findByIdAndUpdate(userid, {
            $set: {
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                city: user.city,
                state: user.state
            }
        }, function (err, user) {
            UserModel.findById(userid, function (err, user) {
                console.log('after update');
                console.log(user);
                deferred.resolve(user);
            });
        });
        return deferred.promise;
    }

    function removeUserById(userid) {

        const deferred = q.defer();
        UserModel.remove({_id: userid}, function (err, result) {
            deferred.resolve(result);
        });
        return deferred.promise;
    }


    /* specific to User Object*/

    function findUserByUsername(username) {

        const deferred = q.defer();
        UserModel.find({username: username}, function (err, result) {
            deferred.resolve(result);
        });
        return deferred.promise;

    }


    function findUserByCredentials(username, password) {
        console.log('just before finding');
        console.log(username);
        console.log(password);
        const deferred = q.defer();
        UserModel.find({username: username}, function (err, user) {
            deferred.resolve(user);
            if (bcrypt.compareSync(user.password, password)) {
                deferred.resolve(user);
            }
            else {
                deferred.error({error: "Username, password not matching"});
            }
        });
        return deferred.promise;
    }

    function getAllUsers() {

        const deferred = q.defer();
        UserModel.find(function (err, results) {
            deferred.resolve(results);
        });
        return deferred.promise;
    }

};

