import { countQuery, countMutation } from "./count/resolvers";

const resolvers = {
  Query: {
    ...countQuery
  },
  Mutation: {
    ...countMutation
  }
};

export default resolvers;
