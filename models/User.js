const mongoose = require('mongoose');
const { stringify } = require('querystring');
const { Schema } = mongoose;

const userSchema = new Schema ({
    googleId: String,
    name: String  
});

mongoose.model('users', userSchema);