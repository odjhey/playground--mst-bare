import { Client, gql } from "@urql/core";

export const hello = async (client: Client) => {
  const QUERY = gql`
    query Test {
      hello
    }
  `;

  return client.query(QUERY, {}).toPromise();
};
