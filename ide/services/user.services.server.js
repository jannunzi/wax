/**
 * Created by Nischay M on 2/1/2017.
 */
module.exports = function (app, model) {

    app.post('/api/user', CreateNewUser);
    app.get('/api/user?', findByQueryString);
    /* for login */
    app.get('/api/user/:id', findUserByUserId);
    app.put('/api/user/:id', updateUser);
    app.delete('/api/user/:id', removeUserById);
    app.get('/api/users/admin', getAllUsers);


    function getAllUsers(req, res) {
        model.userModel
            .getAllUsers()
            .then(function (result) {
                res.json(result);
            });
    }

    function CreateNewUser(req, res) {

        const user = req.body;
        console.log("in user.services.server " + JSON.stringify(user));
        model.userModel
            .create(user)
            .then(function (newuser) {
                res.json(newuser);
            });
    }

    function findUserByUserId(req, res) {
        console.log('inside find by ID');
        const userid = req.params.id;
        model.userModel
            .findUserByUserId(userid)
            .then(function (user) {
                res.json(user);
            });
    }

    function findByQueryString(req, res) {
        if (req.query.password == null && req.query.username == null) {
            //allUsers(req,res);
        }
        else if (req.query.password == null) {
            findByUsername(req, res);
        }
        else {
            findByCredentials(req, res);
        }
    }

    function findByUsername(req, res) {
        const username = req.query.username;
        model.userModel
            .findUserByUsername(username)
            .then(function (result) {
                res.json(result);
            });
    }

    function findByCredentials(req, res) {

        const username = req.query.username;
        const password = req.query.password;
        model.userModel
            .findUserByCredentials(username, password)
            .then(function (user) {
                res.json(user);
            });

    }

    function updateUser(req, res) {

        const userid = req.params.id;
        const user = req.body;
        model.userModel
            .update(user._id, user)
            .then(function (user) {
                res.json(user);
            });
    }


    function removeUserById(req, res) {
        const userid = req.params.id;
        model.userModel
            .removeUserById(userid)
            .then(function (user) {
                res.json(user);
            });
    }

}