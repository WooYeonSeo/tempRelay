import gql from "graphql-tag";
export const GET_INTERVAL = gql`
  {
    interval @client
  }
`;
