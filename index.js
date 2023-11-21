import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// types

import { typeDefs } from "./schema";

//server setup
const server = new ApolloServer({
  // typeDefs -- definitions of types of data
  typeDefs,
  // resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000, url: "/graphql" },
});

console.log(url);

console.log("Server ready at port", 4000);
