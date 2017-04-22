import Song from './song.js'

const RootQuery = '
  type RootQuery {
    song(id: String): Song
  }
';

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, Song],
  resolvers: {},
});
