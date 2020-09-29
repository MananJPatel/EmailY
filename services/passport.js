const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const { deserializeUser } = require('passport');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null,user.id);
});

passport.deserializeUser((id, done) => {
    User.findByID(id).then(user => {
        done(null,user);
    });
});

passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id }).then(existingUser => {
            if (existingUser) {
                done(null,existingUser);
            }
            else {
                new User({ googleId: profile.id })
                .save()
                .then(user => done(null,user));
            }
        });
        // console.log('access token', accessToken);
        // console.log('refresh token', refreshToken);
        // console.log('profile:', profile);

    })
);

