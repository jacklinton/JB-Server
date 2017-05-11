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


// seed();

import Connectors from './connectors';

app.get('/', function(req, res) {
  res.render('index');
});

app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema: myGraphQLSchema,
    context: {},
}));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
}));

Mongoose.connect('mongodb://localhost:27017/test', (err) => {
    if (err) {
        console.log(err);
        return err;
    }

    return true;
});

app.listen(PORT, () => {console.log(
  `GraphQL Server is now running on http://localhost:${PORT}/graphql`
)});
