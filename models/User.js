const { Schema, model } = require('mongoose');

//USER model 
const UserSchema = new Schema(
    {
        userName: {
            type: String, 
            required: true,
            unique: true, 
            trim: true 
        }, 
        email: {
            type: String, 
            required: true,
            unique: true, 
        }, 
        thoughts: [],
        friends: [], 
    }
);

// user model in Mongoose 
const User = model('User', UserSchema);
module.exports = User;

