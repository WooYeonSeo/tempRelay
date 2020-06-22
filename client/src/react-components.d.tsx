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
  id?: Maybe<Scalars['Int']>;
  unitCode?: Maybe<Scalars['Int']>;
  answerData?: Maybe<Scalars['String']>;
  problemLevel?: Maybe<Scalars['Int']>;
  problemType?: Maybe<Scalars['String']>;
  problemURL?: Maybe<Scalars['String']>;
  unitName?: Maybe<Scalars['String']>;
  needCheckLayout?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  hide?: Maybe<Scalars['Int']>;
  curriculumNumber?: Maybe<Scalars['Int']>;
  cebuCode?: Maybe<Scalars['Int']>;
  totalTimes?: Maybe<Scalars['Int']>;
  correctTimes?: Maybe<Scalars['Int']>;
  hwpExist?: Maybe<Scalars['Int']>;
  scorable?: Maybe<Scalars['Int']>;
  tagTop?: Maybe<Scalars['String']>;
  bookDataId?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  feProblem?: Maybe<Scalars['String']>;
};

export type FeProblemQueryVariables = Exact<{ [key: string]: never; }>;


export type FeProblemQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'feProblem'>
);


export const FeProblemDocument = gql`
    query feProblem {
  feProblem
}
    `;
export type FeProblemComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FeProblemQuery, FeProblemQueryVariables>, 'query'>;

    export const FeProblemComponent = (props: FeProblemComponentProps) => (
      <ApolloReactComponents.Query<FeProblemQuery, FeProblemQueryVariables> query={FeProblemDocument} {...props} />
    );
    
export type FeProblemProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<FeProblemQuery, FeProblemQueryVariables>
    } & TChildProps;
export function withFeProblem<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  FeProblemQuery,
  FeProblemQueryVariables,
  FeProblemProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, FeProblemQuery, FeProblemQueryVariables, FeProblemProps<TChildProps, TDataName>>(FeProblemDocument, {
      alias: 'feProblem',
      ...operationOptions
    });
};

/**
 * __useFeProblemQuery__
 *
 * To run a query within a React component, call `useFeProblemQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeProblemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeProblemQuery({
 *   variables: {
 *   },
 * });
 */
export function useFeProblemQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FeProblemQuery, FeProblemQueryVariables>) {
        return ApolloReactHooks.useQuery<FeProblemQuery, FeProblemQueryVariables>(FeProblemDocument, baseOptions);
      }
export function useFeProblemLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FeProblemQuery, FeProblemQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FeProblemQuery, FeProblemQueryVariables>(FeProblemDocument, baseOptions);
        }
export type FeProblemQueryHookResult = ReturnType<typeof useFeProblemQuery>;
export type FeProblemLazyQueryHookResult = ReturnType<typeof useFeProblemLazyQuery>;
export type FeProblemQueryResult = ApolloReactCommon.QueryResult<FeProblemQuery, FeProblemQueryVariables>;