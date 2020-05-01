import {buildSchema} from 'graphql';
import {makeExecutableSchema} from 'graphql-tools';

const sdlSchema = `
  type Author {
    firstName: String
    lastName: String
  }
  input AuthorInput {
    id: Int!
    bookName: String
  }
  type Query {
    author(input: AuthorInput!): Author
  }
`;

// const schema = buildSchema(sdlSchema);

const schema = makeExecutableSchema({
  typeDefs: sdlSchema,
  resolvers: {
    Query: {
      author: (_: any, args: { input: { id: number, bookName?: string } }) => {
        console.log('### author', {args});
        const {id, bookName} = args.input;
        if (id === 1 && bookName === 'hello') {
          return {firstName: "Ada", lastName: "Lovelace"}
        } else {
          throw new Error(`Can't find author`)
        }
      }
    }
  }
});

export default schema;
