import {graphql} from 'graphql';
import schema from './schema';

const query = `{ 
  author(
    input:{
      id: 1, 
      bookName: "hello"
    }
  ) {
   firstName, lastName 
 } 
}`;

graphql(schema, query).then(result => {
  console.log(JSON.stringify(result));
});
