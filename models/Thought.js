const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const reactionSchema = new Schema({
    reactionId: {
        type: Types.ObjectId,
        default: new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        require: true,
        maxlength: 280,
    },
    username: {
        type: String,
        require:true,
    },
    createdAt: {
        type: Date,
        //format date now 
        default: Date.now,
        //format timestamp on query
        get: createdAtVal => dateFormat(createdAtVal)
    }    
},
{
    toJSON: {
        getters: true
    },
    id: false
});

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        //it is Required to have
        required: true,
        //the ma length is 280 c
        maxlength: 280
    },
    createdAt: {
        type: Date,
        //format date now 
        default: Date.now,
        //format timestamp on query
        get: createdAtVal => dateFormat(createdAtVal)
    }, 
    username: {
        type: String,
        required: true
    }, 
    reactions: [reactionSchema]
},
{
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
    }
);

//returns  how many reaction there are 
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

//puts model together 
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
