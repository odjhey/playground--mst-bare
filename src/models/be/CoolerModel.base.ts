/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * CoolerBase
 * auto generated base class for the model CoolerModel.
 */
export const CoolerModelBase = ModelBase
  .named('Cooler')
  .props({
    __typename: types.optional(types.literal("Cooler"), "Cooler"),
    id: types.identifier,
    name: types.union(types.undefined, types.string),
    barCode: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CoolerModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get barCode() { return this.__attr(`barCode`) }
}
export function selectFromCooler() {
  return new CoolerModelSelector()
}

export const coolerModelPrimitives = selectFromCooler().name.barCode
