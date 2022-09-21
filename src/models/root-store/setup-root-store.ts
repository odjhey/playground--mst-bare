import { RootStore, RootStoreModel } from "./root-store";

class Environment {
  constructor(_opts: any) {}
  getEnv() {
    return {
      baseUrl: "",
    };
  }
}

export async function createEnvironment(conf: {
  remoteUrl: string;
}): Promise<Environment> {
  const env = new Environment({
    options: {
      gql: { baseUrl: conf.remoteUrl || "http://localhost:4004/graphql" },
    },
  });

  return env;
}

export async function setupRootStore({
  snapshot,
  envSnapshot = { remoteUrl: "" },
}: {
  snapshot?: any;
  envSnapshot?: any;
}): Promise<{ ok: true; store: RootStore } | { ok: false; error: any }> {
  let rootStore: RootStore;

  // const conf = await loadRemoteConfig();
  const env = await createEnvironment(envSnapshot);

  try {
    rootStore = RootStoreModel.create(
      // snapshot ||
      {
        session: {
          __typename: "Session",
          id: "102938",
          seshname: "sadlfkj",
        },
      },

      env.getEnv()
    );
  } catch (e) {
    console.error(e);
    return { ok: false, error: e };
  }

  // track changes & save to storage
  // onSnapshot(rootStore, (shnap) => storage.save(ROOT_STATE_STORAGE_KEY, shnap));

  return { ok: true, store: rootStore };
}
