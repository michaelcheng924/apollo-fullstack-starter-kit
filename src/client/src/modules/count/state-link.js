const countPageDefaults = {
  countPage: {
    __typename: "countPage",
    changeCountInput: ""
  }
};

const countPageMutations = {
  updateChangeCountInput(_, { changeCountInput }, { cache }) {
    const data = {
      countPage: {
        __typename: "countPage",
        changeCountInput
      }
    };

    cache.writeData({ data });

    return data.countPage;
  }
};

export { countPageDefaults, countPageMutations };
