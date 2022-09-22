import { Instance, SnapshotOut, types, getEnv, flow } from "mobx-state-tree";
import { client } from "../../services/client";
import { hello } from "../../services/hello/hello-svc";
import { outlets } from "../../services/outlets/outlets-svc";
import { RootStore as RootStoreBe } from "../be";

const SessionModel = types.model("Session").props({
  __typename: types.literal("Session"),
  id: types.identifier,
  seshname: types.union(types.undefined, types.string),
});

const OutletModel = types
  .model("Outlet")
  .props({
    __typename: types.literal("Outlet"),
    id: types.identifier,
    name: types.union(types.undefined, types.string),
    code: types.union(types.undefined, types.string),
  })
  .actions((self) => {
    return {};
  });

export const RootStoreModel = types
  .model("RootStore")
  .props({
    session: SessionModel,
    outlets: types.map(OutletModel),
    be: RootStoreBe,
  })
  .actions((self) => {
    const afterCreate = () => {};

    const setSeshname = (s: string) => {
      self.session.seshname = s;
    };

    const getFromServer = flow(function* () {
      try {
        self.session.seshname = yield hello(client).then((d) => d.data.hello);
      } catch (e) {}

      return "ok i guess";
    });

    const getOutlets = flow(function* () {
      try {
        const data = yield outlets(client).then((d) => {
          return d.data;
        });
      } catch (e) {}

      return "ok i guess";
    });

    return {
      afterCreate,
      setSeshname,
      getFromServer,
      getOutlets,
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
