import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import { createHttpLink } from "apollo-link-http";

import errorLink from "./error-link";
import getStateLink from "./get-state-link";

const cache = new InMemoryCache();

const stateLink = getStateLink(cache);

const httpLink = createHttpLink();

const apolloClient = new ApolloClient({
  cache,
  link: ApolloLink.from([errorLink, stateLink, httpLink])
});

export default apolloClient;
