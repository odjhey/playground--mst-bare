import { RootStoreType } from "../models/be";

export const makeBeViews = (beStore: RootStoreType) => {
  const viewOutlets = () => {
    return [...beStore.outlets.entries()].map(([k, v]) => {
      const { id, name, code } = v;
      return { id, name, code };
    });
  };

  const viewOutlet = (id: string) => {
    return beStore.outlets.get(id);
  };

  return { viewOutlets, viewOutlet };
};
