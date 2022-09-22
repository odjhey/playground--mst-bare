import { Instance } from "mobx-state-tree"
import { SkuModelBase } from "./SkuModel.base"

/* The TypeScript type of an instance of SkuModel */
export interface SkuModelType extends Instance<typeof SkuModel.Type> {}

/* A graphql query fragment builders for SkuModel */
export { selectFromSku, skuModelPrimitives, SkuModelSelector } from "./SkuModel.base"

/**
 * SkuModel
 */
export const SkuModel = SkuModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
