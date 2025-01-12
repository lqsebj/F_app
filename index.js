const express = require('express');
const mongoose = require('mongoose')
// const cookieSession = require('cookie-session')
const session = require('express-session')
const passport = require('passport')
const keys = require('./config/keys')
require('./models/User')
require('./services/passport')

mongoose.connect(keys.mongoURI)

const app = express();

app.use(
    // cookieSession({
    //     maxAge: 30 * 24 * 60 * 60 * 1000,
    //     keys: [keys.cookieKey]
    // })
    session({
        secret: keys.cookieKey,
        resave: false,
        saveUninitialized: true, 
        cookie: {
            maxAge: 30 * 24 * 60 * 60 * 1000
        }
    })
)
app.use(passport.initialize())
app.use(passport.session()) 

require('./routes/authRoutes')(app)


// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});