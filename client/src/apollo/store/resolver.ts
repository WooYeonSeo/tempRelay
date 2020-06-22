export enum Interval {
  year = "year",
  month = "month",
  day = "day",
  hour = "hour",
  minute = "minute",
  second = "second"
}

export const resolvers = {
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
};
