const { profile } = require('console');
const express = require('express');
const mongoose = require('mongoose'); 
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        
    })
);

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT); 