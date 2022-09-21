import { setupServer } from "msw/node";
import { graphql } from "msw";

export const server = setupServer(
  graphql.query("hi", (req, res, ctx) => {
    return res(ctx.data({ a: "hi" }));
  })
);
