/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * SkuBase
 * auto generated base class for the model SkuModel.
 */
export const SkuModelBase = ModelBase
  .named('Sku')
  .props({
    __typename: types.optional(types.literal("Sku"), "Sku"),
    id: types.identifier,
    name: types.union(types.undefined, types.string),
    code: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class SkuModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get code() { return this.__attr(`code`) }
}
export function selectFromSku() {
  return new SkuModelSelector()
}

export const skuModelPrimitives = selectFromSku().name.code
