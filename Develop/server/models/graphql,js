type User {
  _id: ID!
  username: String!
  email: String!
}

type Query {
  getUser(id: ID!): User
  getUsers: [User]
}

type Mutation {
  createUser(username: String!, email: String!): User
  updateUser(id: ID!, username: String, email: String): User
  deleteUser(id: ID!): User
}

const User = require('./models/User');

const resolvers = {
  Query: {
    getUser: async (_, { id }) => await User.findById(id),
    getUsers: async () => await User.find(),
  },
  Mutation: {
    createUser: async (_, { username, email }) => await User.create({ username, email }),
    updateUser: async (_, { id, username, email }) => {
      const user = await User.findById(id);
      if (!user) throw new Error('User not found');
      if (username) user.username = username;
      if (email) user.email = email;
      await user.save();
      return user;
    },
    deleteUser: async (_, { id }) => {
      const user = await User.findByIdAndDelete(id);
      if (!user) throw new Error('User not found');
      return user;
    },
  },
};

module.exports = resolvers;