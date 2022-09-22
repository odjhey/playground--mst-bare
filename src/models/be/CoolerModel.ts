import { Instance } from "mobx-state-tree"
import { CoolerModelBase } from "./CoolerModel.base"

/* The TypeScript type of an instance of CoolerModel */
export interface CoolerModelType extends Instance<typeof CoolerModel.Type> {}

/* A graphql query fragment builders for CoolerModel */
export { selectFromCooler, coolerModelPrimitives, CoolerModelSelector } from "./CoolerModel.base"

/**
 * CoolerModel
 */
export const CoolerModel = CoolerModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
