import { setupRootStore } from "./setup-root-store";
import invariant from "tiny-invariant";
import { getSnapshot } from "mobx-state-tree";

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
});
