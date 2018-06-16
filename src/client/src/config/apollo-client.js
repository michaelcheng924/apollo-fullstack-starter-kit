import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import { setContext } from "apollo-link-context";

import errorLink from "./error-link";
import getStateLink from "./get-state-link";
import httpWsLink from "./http-ws-link";

const cache = new InMemoryCache();

const stateLink = getStateLink(cache);

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      authorization: "Bearer 1234"
    }
  };
});

const apolloClient = new ApolloClient({
  cache,
  link: ApolloLink.from([errorLink, stateLink, authLink, httpWsLink])
});

export default apolloClient;
