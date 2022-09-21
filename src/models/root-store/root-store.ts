import {
  Instance,
  SnapshotOut,
  types,
  flow,
  getEnv,
  destroy,
} from "mobx-state-tree";

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

    return {
      afterCreate,
      setSeshname,
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
