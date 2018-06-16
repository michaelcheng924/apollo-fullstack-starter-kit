import { makeExecutableSchema } from "graphql-tools";

import Base from "./base";
import Count from "./count/schema";

import resolvers from "./resolvers";

const schema = makeExecutableSchema({
  typeDefs: [Base, Count],
  resolvers
});

export default schema;
