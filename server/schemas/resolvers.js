const { AuthenticationError } = require('apollo-server-express');
const { User, Comment, Reply} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      // Me (your account)
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')
            .populate('comments')
            .populate('friends');
      
          return userData;
        }
      
        throw new AuthenticationError('Not logged in');
      },
      // Pets (all pets)
      users: async () => {
        return User.find()
        .select('-__v -password')
        .populate('friends')
        .populate('comments');
    },

      // Pet (single pet)
      user: async (parent, { username }) => {
        return Pet.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('comments');
    },

      // Tails (all tails, or by username)
      comments: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Comment.find(params).sort({ createdAt: -1 });
      },

      // Tail (single tail)
      comment: async (parent, { _id }) => {
        return Comment.findOne({ _id });
      },
      // petTypes
      // petTypes: async () => {
      //   return petType.find()
      // }
    },
    Mutation: {
        // Logging in
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
    
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
    
            const correctPw = await user.isCorrectPassword(password);
    
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
            },
        // Create a Pet
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
    
            return { token, user };
          },

        // Create a Tail
        addComment: async (parent, args, context) => {
            if (context.user) {
              const comment = await Comment.create({ ...args, username: context.user.username });
          
              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { comments: comment._id } },
                { new: true }
              );
          
              return comment;
            }
          
            throw new AuthenticationError('You need to be logged in!');
          },

        //  Add a Comment to a Tail
        addReply: async (parent, { commentId, replyText }, context) => {
            if (context.user) {
              const updatedComment = await Comment.findOneAndUpdate(
                { _id: commentId },
                { $push: { replies: { replyText, username: context.user.username } } },
                { new: true, runValidators: true }
              );
          
              return updatedComment;
            }
          
            throw new AuthenticationError('You need to be logged in!');
          },


        // Add another Pet as a Friend
        addFriend: async (parent, { friendId }, context) => {
            if (context.user) {
              const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { friends: friendId } },
                { new: true }
              ).populate('friends');
          
              return updatedUser;
            }
          
            throw new AuthenticationError('You need to be logged in!');
          }

        // Add a Profile Image???

    }
  };

module.exports = resolvers;