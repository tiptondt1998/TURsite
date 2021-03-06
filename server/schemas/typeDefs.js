const { gql } = require('apollo-server-express');

const typeDefs = gql `

type User {
    _id: ID
    username: String
    email: String
    comments: [Comment]
    friends: [User]
    friendCount: Int
}

type Comment {
    _id: ID
    commentText: String
    createdAt: String
    username: String
    replies: [Reply]
    replyCount: Int
}

type Reply {
    _id: ID
    replyText: String
    createdAt: String
    username: String
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    comments(username: String): [Comment]
    comment(_id: ID!): Comment
    }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addComment(commentText: String!): Comment
    addReply(commentId: ID!, replyText: String!): Comment
    addFriend(friendId: ID!): User
    addProfileImage(imageUrl: String!): User
}

type Auth {
    token: ID!
    user: User
}

`;

module.exports = typeDefs;