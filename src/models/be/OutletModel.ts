import { Instance } from "mobx-state-tree"
import { OutletModelBase } from "./OutletModel.base"

/* The TypeScript type of an instance of OutletModel */
export interface OutletModelType extends Instance<typeof OutletModel.Type> {}

/* A graphql query fragment builders for OutletModel */
export { selectFromOutlet, outletModelPrimitives, OutletModelSelector } from "./OutletModel.base"

/**
 * OutletModel
 */
export const OutletModel = OutletModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
