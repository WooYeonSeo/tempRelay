import gql from "graphql-tag";

export const typeDefs = gql`
  extend type Mutation {
    changeInterval: void
  }
`;
