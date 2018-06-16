import { graphql } from "react-apollo";
import gql from "graphql-tag";

const countQuery = graphql(
  gql`
    query count {
      count {
        id
        value
      }
    }
  `,
  {
    props: ({ data: { count, loading } }) => ({
      loading,
      count: count ? count.value : ""
    })
  }
);

const changeCountInputQuery = graphql(
  gql`
    query {
      countPage @client {
        changeCountInput
      }
    }
  `,
  {
    props: ({
      data: {
        countPage: { changeCountInput }
      }
    }) => ({ changeCountInput })
  }
);

const changeCountMutation = graphql(
  gql`
    mutation changeCount($value: Int) {
      changeCount(value: $value) {
        id
        value
      }
    }
  `,
  {
    props: ({ mutate }) => ({
      changeCount(value) {
        mutate({
          variables: { value }
        });
      }
    })
  }
);

const updateChangeCountInputMutation = graphql(
  gql`
    mutation updateChangeCountInput($changeCountInput: String) {
      updateChangeCountInput(changeCountInput: $changeCountInput) @client {
        countPage {
          changeCountInput
        }
      }
    }
  `,
  {
    props: ({ mutate }) => ({
      updateChangeCountInput(changeCountInput) {
        mutate({
          variables: { changeCountInput }
        });
      }
    })
  }
);

export {
  changeCountInputQuery,
  countQuery,
  changeCountMutation,
  updateChangeCountInputMutation
};
