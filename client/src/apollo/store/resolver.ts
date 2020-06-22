export const resolvers = {
  Query: {},
  Mutation: {
    changeSimilarNum: (
      _: any,
      { similarNum }: { similarNum: number },
      { cache }: { cache: any }
    ) => {
      console.log("problemNum ", similarNum);
      cache.writeData({
        data: {
          similarNum
        }
      });
    }
  }
};
