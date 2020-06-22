import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import gql from "graphql-tag";
import link from "./Link";

export interface DefaultCache {
  similarNum: number;
  unitName: string;
}

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link,
  typeDefs: gql`
    extend type Mutation {
      changeSimilarNum: void
    }
  `,
  resolvers: {
    Query: {},
    Mutation: {
      changeSimilarNum: (
        _: any,
        { similarNum, unitName }: { similarNum: number; unitName: string },
        { cache }: { cache: any }
      ) => {
        console.log("problemNum ", similarNum);
        cache.writeData({
          data: {
            similarNum,
            unitName
          }
        });
      }
    }
  }
});

cache.writeData<DefaultCache>({
  data: {
    similarNum: 0,
    unitName: ""
  }
});

export default client;
