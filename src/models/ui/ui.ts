import { getParent, types } from "mobx-state-tree";
import { RootStoreType } from "../be";

export const UiModel = types.model("UiModel").views((self) => {
  const be: RootStoreType = (getParent(self) as any).be;

  return {
    v: () => {},
  };
});
