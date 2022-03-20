const { Schema, model } = require('mongoose');

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
        thoughts: {

        }, 
        friends: {
            
        }
    }
)