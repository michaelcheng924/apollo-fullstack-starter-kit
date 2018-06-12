import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const channelsQuery = graphql(
    gql`
        query {
            channels {
                id
                name
            }
        }
    `,
    {
        props: ({ data: { loading, channels } }) => ({
            loading,
            channels
        })
    }
);

const addChannelMutation = graphql(
    gql`
        mutation addChannel($name: String!) {
            addChannel(name: $string) {
                id
                name
            }
        }
    `,
    {
        props: ({ mutate }) => ({
            addChannel(name) {
                mutate({
                    variables: { name }
                })
            }
        })
    }
);

const deleteChannelMutation = graphql(
    gql`
        mutation deleteChannel($id: ID!) {
            deleteChannel(id: $id) {
                id
            }
        }
    `,
    {
        props: ({ mutate }) => ({
            deleteChannel(id) {
                mutate({
                    variables: { id }
                })
            }
        })
    }
);

export {
    channelsQuery,

    addChannelMutation,
    deleteChannelMutation,
};
