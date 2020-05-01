import {buildSchema} from 'graphql';
import {makeExecutableSchema} from 'graphql-tools';

const sdlSchema = `
  type Author {
    firstName: String
    lastName: String
  }
  type Query {
    author(id: Int!): Author
  }
`;

// const schema = buildSchema(sdlSchema);

const schema = makeExecutableSchema({
  typeDefs: sdlSchema,
  resolvers: {
    Query: {
      author: (_: any, input: { id: number }) => {
        console.log("### args", input)
        const id = input.id;
        if (id === 1) {
          return {firstName: "Ada", lastName: "Lovelace"}
        } else {
          throw new Error(`Unknown id: ${id}`)
        }
      }
    }
  }
});

export default schema;
