import express from 'express';
import bodyParser from 'body-parser';
import Schema from './schema';
import Resolvers from './resolvers';


import { graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';

const myGraphQLSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers,
  allowUnderfinedInResolve: false,
  printErrors: true,
});

const PORT = 3000;

var app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema: myGraphQLSchema,
  endpointURL: '/graphql',
}));

app.listen(PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:{PORT}/graphql`
));
