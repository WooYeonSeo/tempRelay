import gql from "graphql-tag";
export const GET_SIMILAR_NUM = gql`
  {
    similarNum @client
    unitName @client
  }
`;
export const RESET_SIMILAR_NUMBER = gql`
  mutation changeSimilarNum($similarNum: Int!, $unitName: String!) {
    changeSimilarNum(similarNum: $similarNum, unitName: $unitName) @client
  }
`;
