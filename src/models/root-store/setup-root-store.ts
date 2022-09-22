import { client } from "../../libs/urql-client";
import { makeClient } from "../../libs/gql-client";
import { RootStore, RootStoreModel } from "./root-store";

class Environment {
  constructor(_opts: any) {}
  getEnv() {
    return {
      gqlHttpClient: makeClient(client)(),
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

const EMPTY_SNAPSHOT = { be: {}, ui: {} };

export async function setupRootStore({
  snapshot = EMPTY_SNAPSHOT,
  envSnapshot = { remoteUrl: "" },
}: {
  snapshot?: any;
  envSnapshot?: any;
}): Promise<{ ok: true; store: RootStore } | { ok: false; error: any }> {
  let rootStore: RootStore;

  // const conf = await loadRemoteConfig();
  const env = await createEnvironment(envSnapshot);

  try {
    rootStore = RootStoreModel.create(snapshot, env.getEnv());
  } catch (e) {
    console.error(e);
    return { ok: false, error: e };
  }

  // track changes & save to storage
  // onSnapshot(rootStore, (shnap) => storage.save(ROOT_STATE_STORAGE_KEY, shnap));

  return { ok: true, store: rootStore };
}
