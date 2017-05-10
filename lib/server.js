import express from 'express';
import bodyParser from 'body-parser';
import myGraphQLSchema from './schema';
import Mongoose from 'mongoose';


import { graphqlExpress } from 'graphql-server-express';

const PORT = 3000;

const app = express();

app.use(express.static('public'));

Mongoose.connect('mongodb://localhost/test', (err) => {
  if (err) {
    console.log(err);
    return err;
  }

  return true;
});

app.get('/', function(req, res) {
  res.render('index');
});

app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema: myGraphQLSchema,
    endpointURL: '/graphql',
}));

app.listen(PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${PORT}/graphql`
));
