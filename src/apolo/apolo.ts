import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import authLink from "./context";
import errorLink from "./error";
import.meta.env.GRAPHQL_API_URLGRAPHQL_API_URL;

const httpLink = new HttpLink({
  uri: process.env.GRAPHQL_API_URL,
});

export const client = new ApolloClient({
  link: from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
});

console.log(client.link);
