import { setupRootStore } from "./setup-root-store";
import invariant from "tiny-invariant";
import { getSnapshot } from "mobx-state-tree";
import { server } from "../../mocks/server";
import { graphql } from "msw";

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
});
