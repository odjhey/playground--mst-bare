import { getSnapshot } from "mobx-state-tree";
import { useEffect, useState } from "react";
import { RootStore } from "./models/root-store/root-store";
import { setupRootStore } from "./models/root-store/setup-root-store";

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

function App() {
  const [store, setStore] = useState<RootStore>();

  useEffect(() => {
    setupRootStore({ snapshot: DEFAULT_DATA }).then((s) => {
      if (s.ok) {
        setStore(s.store);
      }
    });
  }, []);

  if (store) {
    console.log(getSnapshot(store));
  }

  return (
    <div className="App">
      <div className="card">asdlkfj</div>
      {store && <pre>{JSON.stringify(store.ui.viewOutlets(), null, 2)}</pre>}
    </div>
  );
}

export default App;
