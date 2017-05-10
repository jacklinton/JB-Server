import Song from './song';
import {makeExecutableSchema} from "graphql-tools";



const RootQuery = `
  type RootQuery {
    song(id: String!): Song
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;

const myGraphQLSchema = makeExecutableSchema ({
  typeDefs: [SchemaDefinition, RootQuery, Song],
  resolvers: {},
});

export default myGraphQLSchema;