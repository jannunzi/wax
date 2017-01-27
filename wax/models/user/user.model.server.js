//
// deprecated
//
var mongoose      = require("mongoose");

module.exports = function() {

    // var UserSchema = new mongoose.Schema(
    //     {
    //         username: String,
    //         password: String,
    //         google:   {
    //             id:    String,
    //             token: String
    //         },
    //         facebook:   {
    //             id:    String,
    //             token: String
    //         },
    //         firstName: String,
    //         lastName: String,
    //         email: String,
    //         roles: [String]
    //     }, {collection: "user"});
    //
    // var UserModel = mongoose.model('UserModel', UserSchema);

    var api = {
        createUser: createUser,
        removeUser: removeUser,
        updateUser: updateUser,
        findUserByCredentials: findUserByCredentials,
        findUserByUsername: findUserByUsername,
        findUserById: findUserById,
        findAllUsers: findAllUsers,
        findUserByGoogleId: findUserByGoogleId,
        findUserByFacebookId: findUserByFacebookId
    };
    return api;

    function createUser(user) {
        return UserModel.create(user);
    }
    function updateUser(userId, user) {
        return UserModel.update({_id: userId}, {$set: user});
    }
    function removeUser(userId) {
        return UserModel.remove({_id: userId});
    }

    function findUserByFacebookId(facebookId) {
        return UserModel.findOne({'facebook.id': facebookId});
    }

    function findUserByGoogleId(googleId) {
        return UserModel.findOne({'google.id': googleId});
    }

    function findAllUsers() {
        return UserModel.find();
    }

    function findUserByUsername(username) {
        return UserModel.findOne({username: username});
    }

    function findUserById(userId) {
        return UserModel.findById(userId);
    }

    function findUserByCredentials(credentials) {
        return UserModel.findOne(
            {
                username: credentials.username,
                password: credentials.password
            }
        );
    }
}