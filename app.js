const express = require('express');
const app = express();
const pgp = require('pg-promise')();
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
const db = pgp('postgres://Anthony@localhost:5432/project2_users');

app.engine('html',mustacheExpress())
app.set('view engine', 'html');
app.set('views', __dirname+ '/views');
app.use("/", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  secret: 'demo-secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.get('/', function(req,res){

    if (!req.session.user){

    }
    res.render('index')
})


app.listen(8000, function(){

    console.log("Live on port 8000")
});

app.use(function(err, req, res, next){
  res.status(err.status || 500);
});
