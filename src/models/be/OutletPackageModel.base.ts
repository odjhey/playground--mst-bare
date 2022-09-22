/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OutletPackageRequireTypeEnumType } from "./OutletPackageRequireTypeEnum"
import { PackageModel, PackageModelType } from "./PackageModel"
import { PackageModelSelector } from "./PackageModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  package: PackageModelType;
}

/**
 * OutletPackageBase
 * auto generated base class for the model OutletPackageModel.
 */
export const OutletPackageModelBase = withTypedRefs<Refs>()(ModelBase
  .named('OutletPackage')
  .props({
    __typename: types.optional(types.literal("OutletPackage"), "OutletPackage"),
    id: types.identifier,
    package: types.union(types.undefined, MSTGQLRef(types.late((): any => PackageModel))),
    requireType: types.union(types.undefined, OutletPackageRequireTypeEnumType),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class OutletPackageModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get requireType() { return this.__attr(`requireType`) }
  package(builder: string | PackageModelSelector | ((selector: PackageModelSelector) => PackageModelSelector) | undefined) { return this.__child(`package`, PackageModelSelector, builder) }
}
export function selectFromOutletPackage() {
  return new OutletPackageModelSelector()
}

export const outletPackageModelPrimitives = selectFromOutletPackage().requireType
