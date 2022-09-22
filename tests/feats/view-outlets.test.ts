import invariant from "tiny-invariant";
import { graphql } from "msw";
import { setupRootStore } from "../../src/models/root-store/setup-root-store";
import { server } from "../../mocks/server";

describe("view stuff", () => {
  it("view outlets", async () => {
    const storeResult = await setupRootStore({});
    expect(storeResult.ok).toBeTruthy();
    invariant(storeResult.ok);
    const store = storeResult.store;

    server.use(
      graphql.query("outlets", (req, res, ctx) => {
        return res(
          ctx.data([
            {
              __typename: "Outlet",
              id: "1",
              name: "out1",
              code: "out1",
              coolers: [
                {
                  __typename: "Cooler",
                  id: "1",
                  name: "name",
                  barCode: "asldjf",
                },
              ],
            },
            { __typename: "Outlet", id: "2", name: "out2", code: "out2" },
          ])
        );
      })
    );
    await store.be.queryOutlets();
    console.log(store.ui.viewOutlets());
    console.log(store.ui.viewCoolers());
  });
});
