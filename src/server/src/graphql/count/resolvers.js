import knex from "../connectors";
import { find } from "lodash";

const countQuery = {
  count() {
    return knex("count").then(results => results[0]);
  }
};

const countMutation = {
  changeCount(_, { value }) {
    return knex("count")
      .where({ id: 1 })
      .update({ value })
      .then(() => ({
        id: 1,
        value
      }));
  }
};

export { countQuery, countMutation };
