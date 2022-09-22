import { getSnapshot } from "mobx-state-tree";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "./models/be";
import { RootStore } from "./models/root-store/root-store";
import { setupRootStore } from "./models/root-store/setup-root-store";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import {
  RootStoreContext,
  RootStoreProvider,
  useStores,
} from "./models/root-store/root-store-utils";

const DEFAULT_DATA = {
  ui: {},
  be: {
    __queryCache: {},
    coolers: {
      coo1: {
        __typename: "Cooler",
        id: "coo1",
        name: "name",
        barCode: "asldjf",
      },
    },
    skus: {},
    packages: {},
    outletPackages: {},
    inventories: {},
    outlets: {
      "1": {
        __typename: "Outlet",
        id: "1",
        name: "out1",
        code: "out1",
      },
      "2": {
        __typename: "Outlet",
        id: "2",
        name: "out2",
        code: "out2",
      },
    },
  },
};

const Outlet = (...args: any) => {
  const { outletId } = useParams();
  const store = useStores();

  if (!outletId) {
    return <div>invalid</div>;
  }

  const outlet = store.ui.viewOutlet(outletId);

  return (
    <div>
      <h1>Outlet {outletId}</h1>
      <pre>{JSON.stringify(outlet)}</pre>
    </div>
  );
};

const PageA = () => {
  const store = useStores();
  const outlets = store.ui.viewOutlets();

  return (
    <div className="App">
      {outlets.map((outlet) => {
        return (
          <div key={outlet.id}>
            <pre>{JSON.stringify(outlet)}</pre>
            <Link to={`outlets/${outlet.id}`}>Go to {outlet.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

const router = createBrowserRouter([
  { path: "/", element: <PageA></PageA> },
  { path: "/outlets/:outletId", element: <Outlet></Outlet> },
]);

function App() {
  const [store, setStore] = useState<RootStore>();

  useEffect(() => {
    setupRootStore({ snapshot: DEFAULT_DATA }).then((s) => {
      if (s.ok) {
        setStore(s.store);
      }
    });
  }, []);

  if (!store || !store.be) {
    return <div>Loading</div>;
  }

  return (
    <RootStoreProvider value={store}>
      <StoreContext.Provider value={store.be}>
        <RouterProvider router={router} />
      </StoreContext.Provider>
    </RootStoreProvider>
  );
}

export default App;
