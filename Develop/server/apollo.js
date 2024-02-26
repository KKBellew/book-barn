const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema.graphql');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });