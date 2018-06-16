import { withClientState } from "apollo-link-state";

import {
  countPageDefaults,
  countPageMutations
} from "../modules/count/state-link";

function getStateLink(cache) {
  return withClientState({
    cache,
    resolvers: {
      Mutation: {
        ...countPageMutations
      }
    },
    defaults: {
      ...countPageDefaults
    }
  });
}

export default getStateLink;
