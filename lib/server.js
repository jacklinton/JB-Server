import express from 'express';
import bodyParser from 'body-parser';
import myGraphQLSchema from './schema';
import Mongoose from 'mongoose';
// import seed from './seed';

import {graphiqlExpress, graphqlExpress} from 'graphql-server-express';

const port = process.env.PORT || 8080;

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

Mongoose.connect('mongodb://jacklinton:dig63car@ds143211.mlab.com:43211/heroku_20rbsxxw', (err) => {
    if (err) {
        console.log(err);
        return err;
    }

    return true;
});

app.listen(port, () => {console.log(
  `GraphQL Server is now running on http://localhost:${port}/graphql`
)});
