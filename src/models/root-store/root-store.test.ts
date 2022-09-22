import { setupRootStore } from "./setup-root-store";
import invariant from "tiny-invariant";
import { getSnapshot } from "mobx-state-tree";
import { server } from "../../../mocks/server";
import { graphql } from "msw";

describe("root-store", () => {
  it("should setup with no snapshot", async () => {
    const storeResult = await setupRootStore({});
    expect(storeResult.ok).toBeTruthy();
    invariant(storeResult.ok);
    const store = storeResult.store;

    expect(getSnapshot(store)).toEqual({
      be: {
        __queryCache: {},
        coolers: {},
        inventories: {},
        outletPackages: {},
        outlets: {},
        packages: {},
        skus: {},
      },
      ui: {},
    });
  });

  it("should update store - network query smoke test", async () => {
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
                  id: "coo1",
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

    await store.be.queryOutlets(undefined, undefined, {
      fetchPolicy: "no-cache",
    });

    const snapshot = getSnapshot(store);

    expect(snapshot).toMatchObject({
      be: {
        __queryCache: {},
        coolers: {
          coo1: {
            __typename: "Cooler",
            id: "coo1",
            name: "name",
            barCode: "asldjf",
          },
        },
        skus: {},
        packages: {},
        outletPackages: {},
        inventories: {},
        outlets: {
          "1": {
            __typename: "Outlet",
            id: "1",
            name: "out1",
            code: "out1",
          },
          "2": {
            __typename: "Outlet",
            id: "2",
            name: "out2",
            code: "out2",
          },
        },
      },
    });
  });
});
