import { Instance } from "mobx-state-tree"
import { InventoryModelBase } from "./InventoryModel.base"

/* The TypeScript type of an instance of InventoryModel */
export interface InventoryModelType extends Instance<typeof InventoryModel.Type> {}

/* A graphql query fragment builders for InventoryModel */
export { selectFromInventory, inventoryModelPrimitives, InventoryModelSelector } from "./InventoryModel.base"

/**
 * InventoryModel
 */
export const InventoryModel = InventoryModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
