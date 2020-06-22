import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Problem = {
  __typename?: 'Problem';
  id: Scalars['Int'];
  unitCode: Scalars['Int'];
  answerData: Scalars['String'];
  problemLevel: Scalars['Int'];
  problemType: Scalars['String'];
  problemURL: Scalars['String'];
  unitName: Scalars['String'];
  needCheckLayout: Scalars['Int'];
  source: Scalars['Int'];
  hide: Scalars['Int'];
  curriculumNumber: Scalars['Int'];
  cebuCode: Scalars['Int'];
  totalTimes: Scalars['Int'];
  correctTimes: Scalars['Int'];
  hwpExist: Scalars['Int'];
  scorable: Scalars['Int'];
  tagTop: Scalars['String'];
  bookDataId: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  feProblems?: Maybe<Array<Maybe<Problem>>>;
  feSimilars?: Maybe<Array<Maybe<Problem>>>;
};

export type FeProblemsQueryVariables = Exact<{ [key: string]: never; }>;


export type FeProblemsQuery = (
  { __typename?: 'Query' }
  & { feProblems?: Maybe<Array<Maybe<(
    { __typename?: 'Problem' }
    & Pick<Problem, 'id' | 'unitCode' | 'answerData' | 'problemLevel' | 'problemType' | 'problemURL' | 'unitName'>
  )>>> }
);

export type FeSimilarsQueryVariables = Exact<{ [key: string]: never; }>;


export type FeSimilarsQuery = (
  { __typename?: 'Query' }
  & { feSimilars?: Maybe<Array<Maybe<(
    { __typename?: 'Problem' }
    & Pick<Problem, 'id' | 'unitCode' | 'problemLevel'>
  )>>> }
);


export const FeProblemsDocument = gql`
    query feProblems {
  feProblems {
    id
    unitCode
    answerData
    problemLevel
    problemType
    problemURL
    unitName
  }
}
    `;
export type FeProblemsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FeProblemsQuery, FeProblemsQueryVariables>, 'query'>;

    export const FeProblemsComponent = (props: FeProblemsComponentProps) => (
      <ApolloReactComponents.Query<FeProblemsQuery, FeProblemsQueryVariables> query={FeProblemsDocument} {...props} />
    );
    
export type FeProblemsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<FeProblemsQuery, FeProblemsQueryVariables>
    } & TChildProps;
export function withFeProblems<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  FeProblemsQuery,
  FeProblemsQueryVariables,
  FeProblemsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, FeProblemsQuery, FeProblemsQueryVariables, FeProblemsProps<TChildProps, TDataName>>(FeProblemsDocument, {
      alias: 'feProblems',
      ...operationOptions
    });
};

/**
 * __useFeProblemsQuery__
 *
 * To run a query within a React component, call `useFeProblemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeProblemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeProblemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFeProblemsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FeProblemsQuery, FeProblemsQueryVariables>) {
        return ApolloReactHooks.useQuery<FeProblemsQuery, FeProblemsQueryVariables>(FeProblemsDocument, baseOptions);
      }
export function useFeProblemsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FeProblemsQuery, FeProblemsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FeProblemsQuery, FeProblemsQueryVariables>(FeProblemsDocument, baseOptions);
        }
export type FeProblemsQueryHookResult = ReturnType<typeof useFeProblemsQuery>;
export type FeProblemsLazyQueryHookResult = ReturnType<typeof useFeProblemsLazyQuery>;
export type FeProblemsQueryResult = ApolloReactCommon.QueryResult<FeProblemsQuery, FeProblemsQueryVariables>;
export const FeSimilarsDocument = gql`
    query feSimilars {
  feSimilars {
    id
    unitCode
    problemLevel
  }
}
    `;
export type FeSimilarsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FeSimilarsQuery, FeSimilarsQueryVariables>, 'query'>;

    export const FeSimilarsComponent = (props: FeSimilarsComponentProps) => (
      <ApolloReactComponents.Query<FeSimilarsQuery, FeSimilarsQueryVariables> query={FeSimilarsDocument} {...props} />
    );
    
export type FeSimilarsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<FeSimilarsQuery, FeSimilarsQueryVariables>
    } & TChildProps;
export function withFeSimilars<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  FeSimilarsQuery,
  FeSimilarsQueryVariables,
  FeSimilarsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, FeSimilarsQuery, FeSimilarsQueryVariables, FeSimilarsProps<TChildProps, TDataName>>(FeSimilarsDocument, {
      alias: 'feSimilars',
      ...operationOptions
    });
};

/**
 * __useFeSimilarsQuery__
 *
 * To run a query within a React component, call `useFeSimilarsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeSimilarsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeSimilarsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFeSimilarsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FeSimilarsQuery, FeSimilarsQueryVariables>) {
        return ApolloReactHooks.useQuery<FeSimilarsQuery, FeSimilarsQueryVariables>(FeSimilarsDocument, baseOptions);
      }
export function useFeSimilarsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FeSimilarsQuery, FeSimilarsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FeSimilarsQuery, FeSimilarsQueryVariables>(FeSimilarsDocument, baseOptions);
        }
export type FeSimilarsQueryHookResult = ReturnType<typeof useFeSimilarsQuery>;
export type FeSimilarsLazyQueryHookResult = ReturnType<typeof useFeSimilarsLazyQuery>;
export type FeSimilarsQueryResult = ApolloReactCommon.QueryResult<FeSimilarsQuery, FeSimilarsQueryVariables>;