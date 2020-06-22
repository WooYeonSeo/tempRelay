import { HttpLink } from "apollo-link-http";

const link = new HttpLink({
  uri: process.env.GRAPHQL_SERVER || "http://localhost:3000/graphql"
});

export default link;
