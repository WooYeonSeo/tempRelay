import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
// import { resolvers, typeDefs, DefaultCache } from "./store/index";
import gql from "graphql-tag";
import link from "./Link";

export interface DefaultCache {
  interval: string;
}

export enum Interval {
  year = "year",
  month = "month",
  day = "day",
  hour = "hour",
  minute = "minute",
  second = "second"
}

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link,
  typeDefs: gql`
    extend type Mutation {
      changeInterval: void
    }
  `,
  resolvers: {
    Query: {},
    Mutation: {
      changeInterval: (
        _: any,
        { interval }: { interval: Interval },
        { cache }: { cache: any }
      ) => {
        cache.writeData({ data: { interval } });
      }
    }
  }
});

cache.writeData<DefaultCache>({
  data: {
    interval: "hour"
  }
});

export default client;
