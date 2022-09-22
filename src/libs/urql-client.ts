import { createClient } from "@urql/core";
import f from "isomorphic-fetch";

const config = {
  token: "asdf",
};

export const updateToken = (v: string) => {
  config.token = v;
};

export const client = createClient({
  url: "http://localhost:4000/graphql",
  fetch: f,
  fetchOptions: () => ({
    headers: {
      token: config.token,
    },
  }),
});
