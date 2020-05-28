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

// Dev Environment ----
const sequelize = new Sequelize('final_project_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

// Production Environment ----
// const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASS, {
//   host: process.env.HOST,
//   dialect: 'mysql'
// });

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
app.use(cors({origin: 'http://localhost:3000'}))
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// require("./routes/tokenRoutes.js")(app);

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
  console.log(profile.battletag)
  return done(null, profile);
}));

app.get('/auth/bnet',
  passport.authenticate('bnet'));

app.get('/auth/bnet/callback',
  passport.authenticate('bnet', { failureRedirect: '/' }),
  function (req, res) {

    //User access token
    var userToken = req.user.token

    res.redirect('http://localhost:3000/Home/' + userToken)
  });

app.post('/api/initUser', (req, res, next) => {
  const {userToken} = req.body;
  console.log('userToken-----',userToken)
  const guildActivityAPI = 'https://us.api.blizzard.com/data/wow/guild/nordrassil/shadow-ninjas/activity?namespace=profile-us&locale=en_US&access_token=' + userToken

    // const getActivity = async () => {
    //     const activity = await axios.get(guildActivityAPI)
    //     const activityData = activity.data.activities
    //     console.log(activityData)
    //     const achievementText = await axios.get()
       
    // }
    axios.get(guildActivityAPI).then(activity => {
      const activityData = activity.data.activities;
      axios.get(activityData[0].character_achievement.achievement.key.href).then(r => {
        console.log('------r', r)
      })
      // const activityPromises = activityData.map(act => {
      //   return axios.get(act.character_achievement.achievement.key.href)
      // })
      // console.log(activityPromises)
      // Promise.all(activityPromises).then((activityResponse) => {
      //   console.log(activityResponse)
      // })
  }).catch(e => next(e))
    
  res.send('hello')
})

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("Server listening on PORT " + PORT);
  });
});

