import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const schema = `
  type Person {
    id: Int!
    name: String
    surname: String
    email: String
    phone: String
  }
  type Query {
    persons: [Person]
    person(id: Int!): Person
  }
`;

const optionsSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});

export default optionsSchema;
