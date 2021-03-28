const { Schema, model } = require('mongoose');
const replySchema = require('./Reply');
// need to add date formatting feel free to use your own or copy one that we have already used
const dateFormat = require('../utils/dateFormat');


// postSchema
const commentSchema = new Schema(
    {
        commentText: {
            type: String,
            required: 'You need add text to your Tail',
            minlength: 1,
            maxlength: 10000,
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        replies: [replySchema]
    },
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
    }
)

commentSchema.virtual('replyCount').get(function() {
    return this.replies.length;
  });

const Comment = model("comment", commentSchema);
module.exports = Comment;

// postText {String, required, minlength 1, maxlength 10000}
// createdAt {Date, default, get}
// username {String, required}
// comments [commentSchema]
// getters true

// virtual commentCount