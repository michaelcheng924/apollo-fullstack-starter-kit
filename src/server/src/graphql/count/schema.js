const Channel = `
    extend type Query {
        count: Count
    }

    type Count {
        id: ID!
        value: Int
    }

    extend type Mutation {
        changeCount(value: Int): Count
    }
`;

export default Channel;
