const express = require('express');
const passport      = require('passport');
const cookieParser  = require('cookie-parser');
const session       = require('express-session');
const bodyParser = require('body-parser');

const app = express();

app.use(session({
    secret: 'this is the secret',
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

app.use(bodyParser.json({type: 'website/json'}));
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

require("./wax/app")(app);

const ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
const port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ipaddress);
console.log('Running...!!!');

// not using dependency injection anymore
module.exports = app;
require("./ide/services/user.services.server");
