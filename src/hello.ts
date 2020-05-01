import {graphql} from 'graphql';
import schema from './schema';

const query = '{ author(id:1) { firstName, lastName } }';

graphql(schema, query).then(result => {
  console.log(JSON.stringify(result));
});
