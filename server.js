const express = require("express");
const passport = require('passport');
const app = express();
const PORT = process.env.PORT || 3001;
const BnetStrategy = require('passport-bnet').Strategy;

const dotenv = require('dotenv')
dotenv.config();
const BNET_ID = process.env.BNET_ID
const BNET_SECRET = process.env.BNET_SECRET

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(passport.initialize());

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
// Use the BnetStrategy within Passport.
passport.use(new BnetStrategy({
    clientID: BNET_ID,
    clientSecret: BNET_SECRET,
    callbackURL: "http://localhost:3001/auth/bnet/callback",
    region: "us"
}, function(accessToken, refreshToken, profile, done) {
  console.log("Profile----", profile)
    return done(null, profile);
}));

app.get('/auth/bnet',
    passport.authenticate('bnet'));

app.get('/auth/bnet/callback',
    passport.authenticate('bnet', { failureRedirect: '/' }),
    function(req, res){

      //User access token
      var userToken = req.user.token
      
      res.redirect('http://localhost:3000/Home')
    });

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });

