/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CoolerModel, CoolerModelType } from "./CoolerModel"
import { CoolerModelSelector } from "./CoolerModel.base"
import { OutletPackageModel, OutletPackageModelType } from "./OutletPackageModel"
import { OutletPackageModelSelector } from "./OutletPackageModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  coolers: IObservableArray<CoolerModelType>;
  packages: IObservableArray<OutletPackageModelType>;
}

/**
 * OutletBase
 * auto generated base class for the model OutletModel.
 */
export const OutletModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Outlet')
  .props({
    __typename: types.optional(types.literal("Outlet"), "Outlet"),
    id: types.identifier,
    name: types.union(types.undefined, types.string),
    code: types.union(types.undefined, types.string),
    coolers: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => CoolerModel)))),
    packages: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => OutletPackageModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class OutletModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get code() { return this.__attr(`code`) }
  coolers(builder: string | CoolerModelSelector | ((selector: CoolerModelSelector) => CoolerModelSelector) | undefined) { return this.__child(`coolers`, CoolerModelSelector, builder) }
  packages(builder: string | OutletPackageModelSelector | ((selector: OutletPackageModelSelector) => OutletPackageModelSelector) | undefined) { return this.__child(`packages`, OutletPackageModelSelector, builder) }
}
export function selectFromOutlet() {
  return new OutletModelSelector()
}

export const outletModelPrimitives = selectFromOutlet().name.code
