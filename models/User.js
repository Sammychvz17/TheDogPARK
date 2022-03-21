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
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thoughts'
              }
        ],
        friends: [], 
    },
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
        // prevents virtuals from creating duplicate of _id as `id`
        id: false
      }
);

// user model in Mongoose 
const User = model('User', UserSchema);
module.exports = User;

