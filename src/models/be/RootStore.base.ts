/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { CoolerModel, CoolerModelType } from "./CoolerModel"
import { coolerModelPrimitives, CoolerModelSelector } from "./CoolerModel.base"
import { OutletModel, OutletModelType } from "./OutletModel"
import { outletModelPrimitives, OutletModelSelector } from "./OutletModel.base"



/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  coolers: ObservableMap<string, CoolerModelType>,
  outlets: ObservableMap<string, OutletModelType>
}


/**
* Enums for the names of base graphql actions
*/
export enum RootStoreBaseQueries {
queryHello="queryHello",
queryHi="queryHi",
queryOutlets="queryOutlets"
}


/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['Cooler', () => CoolerModel], ['Outlet', () => OutletModel]], ['Cooler', 'Outlet'], "js"))
  .props({
    coolers: types.optional(types.map(types.late((): any => CoolerModel)), {}),
    outlets: types.optional(types.map(types.late((): any => OutletModel)), {})
  })
  .actions(self => ({
    queryHello(variables?: {  }, options: QueryOptions = {}) {
      return self.query<{ hello: string }>(`query hello { hello }`, variables, options)
    },
    queryHi(variables?: {  }, options: QueryOptions = {}) {
      return self.query<{ hi: string }>(`query hi { hi }`, variables, options)
    },
    queryOutlets(variables?: {  }, resultSelector: string | ((qb: OutletModelSelector) => OutletModelSelector) = outletModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ outlets: OutletModelType[]}>(`query outlets { outlets {
        ${typeof resultSelector === "function" ? resultSelector(new OutletModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
  })))
