import { Instance } from "mobx-state-tree"
import { OutletPackageModelBase } from "./OutletPackageModel.base"

/* The TypeScript type of an instance of OutletPackageModel */
export interface OutletPackageModelType extends Instance<typeof OutletPackageModel.Type> {}

/* A graphql query fragment builders for OutletPackageModel */
export { selectFromOutletPackage, outletPackageModelPrimitives, OutletPackageModelSelector } from "./OutletPackageModel.base"

/**
 * OutletPackageModel
 */
export const OutletPackageModel = OutletPackageModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
