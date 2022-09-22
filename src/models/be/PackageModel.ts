import { Instance } from "mobx-state-tree"
import { PackageModelBase } from "./PackageModel.base"

/* The TypeScript type of an instance of PackageModel */
export interface PackageModelType extends Instance<typeof PackageModel.Type> {}

/* A graphql query fragment builders for PackageModel */
export { selectFromPackage, packageModelPrimitives, PackageModelSelector } from "./PackageModel.base"

/**
 * PackageModel
 */
export const PackageModel = PackageModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
