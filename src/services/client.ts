import { createClient } from "@urql/core";
import f from "isomorphic-fetch";

export const client = createClient({
  url: "http://localhost:4000/graphql",
  fetch: f,
});
