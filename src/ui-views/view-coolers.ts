import { RootStoreType } from "../models/be";

export const makeBeViews = (beStore: RootStoreType) => {
  const viewCoolers = () => {
    return [...beStore.coolers.entries()].map(([k, v]) => {
      const { id, name } = v;
      return { id, name };
    });
  };

  const viewCooler = (id: string) => {
    return beStore.coolers.get(id);
  };

  return { viewCoolers, viewCooler };
};
