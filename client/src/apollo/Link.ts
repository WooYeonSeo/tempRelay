import { HttpLink } from "apollo-link-http";

const link = new HttpLink({
  uri: "http://localhost:4000/graphql" || "http://localhost:3000/graphql"
});

export default link;
