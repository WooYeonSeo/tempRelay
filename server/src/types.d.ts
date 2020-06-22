import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Problem: ResolverTypeWrapper<Problem>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Problem: Problem;
  Int: Scalars['Int'];
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
};

export type ProblemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Problem'] = ResolversParentTypes['Problem']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  unitCode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  answerData?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  problemLevel?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  problemType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  problemURL?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unitName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  needCheckLayout?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hide?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  curriculumNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cebuCode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalTimes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  correctTimes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hwpExist?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  scorable?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tagTop?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bookDataId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  feProblems?: Resolver<Maybe<Array<Maybe<ResolversTypes['Problem']>>>, ParentType, ContextType>;
  feSimilars?: Resolver<Maybe<Array<Maybe<ResolversTypes['Problem']>>>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Problem?: ProblemResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
