/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { SkuModel, SkuModelType } from "./SkuModel"
import { SkuModelSelector } from "./SkuModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  sku: SkuModelType;
}

/**
 * InventoryBase
 * auto generated base class for the model InventoryModel.
 */
export const InventoryModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Inventory')
  .props({
    __typename: types.optional(types.literal("Inventory"), "Inventory"),
    id: types.identifier,
    sku: types.union(types.undefined, MSTGQLRef(types.late((): any => SkuModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class InventoryModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  sku(builder: string | SkuModelSelector | ((selector: SkuModelSelector) => SkuModelSelector) | undefined) { return this.__child(`sku`, SkuModelSelector, builder) }
}
export function selectFromInventory() {
  return new InventoryModelSelector()
}

export const inventoryModelPrimitives = selectFromInventory()
