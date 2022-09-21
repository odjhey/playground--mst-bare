import { Instance, SnapshotOut, types, getEnv, flow } from "mobx-state-tree";
import { client } from "../../services/client";
import { hello } from "../../services/hello-svc";

const SessionModel = types.model("Session").props({
  __typename: types.literal("Session"),
  id: types.identifier,
  seshname: types.union(types.undefined, types.string),
});

export const RootStoreModel = types
  .model("RootStore")
  .props({
    session: SessionModel,
  })
  .actions((self) => {
    const afterCreate = () => {};

    /*
    const initEpod = flow(function* initEpod() {
      self.epod.clearDeliveries();
    });
    */

    const setSeshname = (s: string) => {
      self.session.seshname = s;
    };

    const getFromServer = flow(function* () {
      try {
        self.session.seshname = yield hello(client).then((d) => d.data.hello);
      } catch (e) {}

      return "ok i guess";
    });

    return {
      afterCreate,
      setSeshname,
      getFromServer,
    };
  })
  .views((self) => ({
    vEnv: () => {
      return { baseUrl: getEnv(self)?.baseUrl };
    },
  }));

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
