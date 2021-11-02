//  import the gql tagged tem function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
}
type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
}
type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Thought]
    friends: [User]
}
type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String):[Thought]
    thought(_id: ID!): Thought
}
`;
//  here we naming our query as hello and data type it returns is string
// export the typeDefs
module.exports = typeDefs;
