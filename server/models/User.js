const { Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

// petSchema
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },  
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true,
            minlength: 8
        },
        image: {
            type: String,
            default: 'https://res.cloudinary.com/critter-cloud/image/upload/v1616599800/critter/pjcea1yvidbctrgnnbru.jpg'
        },
       
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
          virtuals: true
        }
    }
);

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
  });

userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
  };

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

  const User = model('User', userSchema);
  module.exports = User;
  
//username {String, required, unique, trim}
// petType {String, required, trim}
// image {String}
// age {Int}
// sex {String, required}
// bio {string, required}
// humanStatus {string}
// posts [{ref Post}]
// friends [{ ref Pet}]
// include a virtual for friendCount see logic at the bottom of user in Deep-Thoughts

// see the logic in Deep-Thoughts for the password encryption logic