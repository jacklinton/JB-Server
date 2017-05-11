import Song from './song';
import {makeExecutableSchema} from "graphql-tools";
import Resolvers from './resolvers';


const RootQuery = `
  type RootQuery {
    song(title: String!): Song
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;

const myGraphQLSchema = makeExecutableSchema ({
  typeDefs: [SchemaDefinition, RootQuery, Song],
  resolvers: Resolvers,
});

export default myGraphQLSchema;