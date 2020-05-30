const express = require("express");
const passport = require('passport');
const app = express();
const PORT = process.env.PORT || 3001;
const BnetStrategy = require('passport-bnet').Strategy;
const Sequelize = require('sequelize');
const dotenv = require('dotenv')
const cors = require('cors')
const axios = require('axios');
const db = require('./models')
dotenv.config();

// // Dev Environment ----
// const sequelize = new Sequelize('final_project_db', 'root', 'root', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// Production Environment ----
const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASS, {
  host: process.env.HOST,
  dialect: 'mysql'
});

//Test Sequelize connection with Database
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const BNET_ID = process.env.BNET_ID
const BNET_SECRET = process.env.BNET_SECRET



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }))
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


require("./routes/tokenRoutes.js")(app);
require("./routes/event_routes.js")(app);
app.use(passport.initialize());

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});
// Use the BnetStrategy within Passport.
passport.use(new BnetStrategy({
  clientID: BNET_ID,
  clientSecret: BNET_SECRET,
  callbackURL: "http://localhost:3001/auth/bnet/callback",
  region: "us"
}, function (accessToken, refreshToken, profile, done) {
  
  // console.log(profile)
  return done(null, profile);
}));

app.get('/auth/bnet',
  passport.authenticate('bnet'));

app.get('/auth/bnet/callback',
  passport.authenticate('bnet', { failureRedirect: '/' }),
  function (req, res) {

    const userToken = req.user.token
    res.redirect('http://localhost:3000/Home/' + userToken)
  });

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("Server listening on PORT " + PORT);
  });
});

