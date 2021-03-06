const { Schema } = require('mongoose');
const dateFormat = require("../utils/dateFormat");

// date formatting required here too
const replySchema = new Schema(
    {
        username: {
          type: String,
          required: true
        },
        replyText: {
          type: String,
          required: 'You must add text to your comment!',
          minlength: 1,
          maxlength: 3000
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: createdAtVal => dateFormat(createdAtVal)
        },
      },
      {
        toJSON: {
          getters: true
        },
      }
)

// commentText {String, required, maxlength 3000}
// username {String, required}
// createdAt {Date, default, get}
// getters true

module.exports = replySchema;