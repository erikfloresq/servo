import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../data/schema';

const router = express.Router();

/* GET users listing. */
router.get('/', graphqlHTTP({
  schema,
  graphiql: true,
  pretty: true,
}));

/*  POST users listing. */
router.post('/', graphqlHTTP({
  schema,
  rootValue: global,
}));

export default router;
