/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { SkuModel, SkuModelType } from "./SkuModel"
import { SkuModelSelector } from "./SkuModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  items: IObservableArray<SkuModelType>;
}

/**
 * PackageBase
 * auto generated base class for the model PackageModel.
 */
export const PackageModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Package')
  .props({
    __typename: types.optional(types.literal("Package"), "Package"),
    id: types.identifier,
    name: types.union(types.undefined, types.string),
    code: types.union(types.undefined, types.string),
    items: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => SkuModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class PackageModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get code() { return this.__attr(`code`) }
  items(builder: string | SkuModelSelector | ((selector: SkuModelSelector) => SkuModelSelector) | undefined) { return this.__child(`items`, SkuModelSelector, builder) }
}
export function selectFromPackage() {
  return new PackageModelSelector()
}

export const packageModelPrimitives = selectFromPackage().name.code
