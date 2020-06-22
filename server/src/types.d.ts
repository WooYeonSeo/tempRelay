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
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Problem: ResolverTypeWrapper<Problem>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Problem: Problem;
  Int: Scalars['Int'];
};

export type ProblemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Problem'] = ResolversParentTypes['Problem']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  unitCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  answerData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  problemLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  problemType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  problemURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unitName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  needCheckLayout?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hide?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  curriculumNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cebuCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalTimes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  correctTimes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hwpExist?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  scorable?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tagTop?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bookDataId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  feProblem?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
