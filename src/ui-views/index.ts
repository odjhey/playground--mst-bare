import { getParent } from "mobx-state-tree";
import { RootStoreType } from "../models/be";
import * as Outlets from "./view-outlets";
import * as Coolers from "./view-coolers";

export const makeViews = (uiStore: any) => {
  const be: RootStoreType = (getParent(uiStore) as any).be;

  return {
    ...Outlets.makeBeViews(be),
    ...Coolers.makeBeViews(be),
  };
};
