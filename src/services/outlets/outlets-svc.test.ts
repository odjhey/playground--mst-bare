import { client } from "../client";
import { server } from "../../mocks/server";
import { graphql } from "msw";
import { outlets } from "./outlets-svc";

describe("sv", () => {
  it("asdlfjk", async () => {
    server.use(
      graphql.query("AllOutlets", (req, res, ctx) => {
        return res(
          ctx.data([
            { id: "1", name: "out1", code: "out1" },
            { id: "2", name: "out2", code: "out2" },
          ])
        );
      })
    );

    const d = await outlets(client);

    expect(d.data).toEqual([
      { id: "1", name: "out1", code: "out1" },
      { id: "2", name: "out2", code: "out2" },
    ]);
  });
});
