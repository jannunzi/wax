module.exports = function (app, model) {

    var bcrypt = require("bcrypt-nodejs");

    app.post('/api/login', login);
    app.get("/api/user/:uid", findUserById);
    app.put("/api/user/:uid", updateUser);
    app.get("/api/user", findCurrentUser);
    app.delete("/api/user/:uid", deleteUser);
    app.post("/api/checkLogin", checkLogin);
    app.post("/api/logout", logout);
    app.post("/api/register", createUser);

    function findCurrentUser(req, res) {
        var params = req.params;
        var query = req.query;
        if (query.password && query.username) {
            findUserByCredentials(req, res);
        } else if (query.username) {
            findUserByUsername(req, res);
        } else {
            res.json(req.user);
        }
    }

    function findUserByCredentials(req, res) {
        var username = req.query.username;
        var password = bcrypt.hashSync(req.query.password);
        model.userModel.findUserByCredentials(username, password)
            .then(
                function (user) {
                    if (user) {
                        res.json(user);
                    } else {
                        res.send('0');
                    }
                },
                function (error) {
                    res.sendStatus(400).send(error);
                });
    }

    function logout(req, res) {
        req.logOut();
        res.send(200);
    }

    function login(req, res) {
        var user = req.body;
        var username = user.username;
        var password = user.password;
      /*  if (password)
            password = bcrypt.hashSync(password);
*/
        model.userModel.findUserByCredentials(username, password)
            .then(
                function (userObj) {
                    console.log("in service server2 - " +  userObj);
                    if (userObj) {
                        res.json(userObj);
                    } else {
                        res.send('0');
                    }
                },
                function (error) {
                    res.sendStatus(400).send(error);
                });
    }

    function checkLogin(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }

    function createUser(req, res) {
        var user = req.body;

        var mainuser = {
            username: user.username,
            password: user.password,
            firstName: user.username,
            lastName: user.username
        };

       /* if (mainuser.password)
            mainuser.password = bcrypt.hashSync(mainuser.password);
*/
        console.log("in server1 " + JSON.stringify(mainuser));

        model.userModel.createUser(mainuser)
            .then(
                function (userObj) {
                    if (userObj) {
                        res.json(userObj);
                    }
                }
            );
    }

    function updateUser(req, res) {
        var user = req.body;
        model.userModel.updateUser(user._id, user)
            .then(
                function (body) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }

    function deleteUser(req, res) {
        var uid = req.params['uid'];
        model.userModel.deleteUser(uid)
            .then(
                function (body) {
                    res.send(body)
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }

    function findUserById(req, res) {
        var uid = req.params['uid'];

        model.userModel.findUserById(uid)
            .then(
                function (body) {
                    res.send(body);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }

};