import { setupRootStore } from "./setup-root-store";
import invariant from "tiny-invariant";
import { getSnapshot } from "mobx-state-tree";
import { server } from "../../mocks/server";
import { graphql } from "msw";
import { updateToken } from "../../services/client";

describe("test", () => {
  it("alsdkf", async () => {
    const storeResult = await setupRootStore({});
    expect(storeResult.ok).toBeTruthy();
    invariant(storeResult.ok);
    const store = storeResult.store;

    store.setSeshname("johnasdf");

    expect(getSnapshot(store.session)).toMatchObject({
      __typename: "Session",
      id: "102938",
      seshname: "johnasdf",
    });
  });

  it("asks from server", async () => {
    const storeResult = await setupRootStore({});
    expect(storeResult.ok).toBeTruthy();
    invariant(storeResult.ok);
    const store = storeResult.store;

    server.use(
      graphql.query("Test", (req, res, ctx) => {
        return res(ctx.data({ hello: "no flippin way" }));
      })
    );

    await store.getFromServer();

    expect(getSnapshot(store.session)).toMatchObject({
      __typename: "Session",
      id: "102938",
      seshname: "no flippin way",
    });
  });

  it("asks from server -- ehh", async () => {
    const storeResult = await setupRootStore({
      snapshot: {
        be: {},
        outlets: {
          1: { __typename: "Outlet", id: "1", name: "out1", code: "out1" },
        },
        session: {
          __typename: "Session",
          id: "102938",
          seshname: "sadlfkj",
        },
      },
    });
    expect(storeResult.ok).toBeTruthy();
    invariant(storeResult.ok);
    const store = storeResult.store;

    server.use(
      graphql.query("AllOutlets", (req, res, ctx) => {
        return res(
          ctx.data([
            { __typename: "Outlet", id: "1", name: "out1", code: "out1" },
            { __typename: "Outlet", id: "2", name: "out2", code: "out2" },
          ])
        );
      }),
      graphql.query("outlets", (req, res, ctx) => {
        console.log("HH", req.headers.get("token"));
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
      }),
      graphql.query("hello", (req, res, ctx) => {
        console.log("HH2", req.headers.get("token"));
        return res(ctx.data({ hello: "no flippin way" }));
      })
    );

    await store.getOutlets();
    await store.be.queryOutlets(undefined, undefined, {
      fetchPolicy: "no-cache",
    });
    updateToken("--asdfkj");
    await store.be.queryHello();

    expect(getSnapshot(store)).toMatchObject({});
  });
});
