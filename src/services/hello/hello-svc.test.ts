import { hello } from "./hello-svc";
import { client } from "../client";
import { server } from "../../mocks/server";
import { graphql } from "msw";

describe("sv", () => {
  it("asdlfjk", async () => {
    server.use(
      graphql.query("Test", (req, res, ctx) => {
        return res(ctx.data({ hello: "hey lo" }));
      })
    );

    const d = await hello(client);

    expect(d.data).toEqual({ hello: "hey lo" });
  });
});
