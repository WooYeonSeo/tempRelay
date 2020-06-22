import { gql } from "apollo-boost";

export const FE_PROBLEMS = gql`
  query feProblems {
    feProblems {
      id
    }
  }
`;

export const SE_PROBLEMS = gql`
  query feSimilars {
    feSimilars {
      id
      unitCode
      problemLevel
    }
  }
`;
