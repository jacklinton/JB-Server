import express from 'express';
import bodyParser from 'body-parser';
import myGraphQLSchema from './schema';
import Mongoose from 'mongoose';
// import seed from './seed';

import {graphiqlExpress, graphqlExpress} from 'graphql-server-express';

const PORT = 3000;

const app = express();

app.use(express.static('public'));

Mongoose.Promise = global.Promise;
Mongoose.connect('mongodb://localhost/test', (err) => {
  if (err) {
    console.log(err);
    return err;
  }

  return true;
});

// seed();

import Connectors from './connectors';

app.get('/', function(req, res) {
  res.render('index');
});

app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema: myGraphQLSchema,
    context: {
        constructor: Connectors,
    },
}));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
}));

app.listen(PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${PORT}/graphql`
));
