import { Instance, SnapshotOut, types, getEnv, flow } from "mobx-state-tree";
import { RootStore as RootStoreBe } from "../be";
import { UiModel } from "../ui/ui";

export const RootStoreModel = types
  .model("RootStore")
  .props({
    be: RootStoreBe,
    ui: UiModel,
  })
  .actions((self) => {
    const afterCreate = () => {};

    return {
      afterCreate,
    };
  })
  .views((self) => ({}));

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
