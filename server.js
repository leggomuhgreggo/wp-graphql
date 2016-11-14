import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { Definitions, Resolvers } from './schema';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

const APP_PORT = 3000;

let app = express();

const executableSchema = makeExecutableSchema({
  typeDefs: Definitions,
  resolvers: Resolvers,
});

// GraphQL Server
app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema: executableSchema,
    // context: {}
}));

// GraphiQl Schema Explorer
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

// Server Init
app.listen(APP_PORT, () => {
  console.log(`App is now running on http://localhost:${APP_PORT}`);
});

