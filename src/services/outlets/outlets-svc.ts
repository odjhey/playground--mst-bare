import { Client, gql } from "@urql/core";

export const outlets = async (client: Client) => {
  const QUERY = gql`
    query AllOutlets {
      outlets {
        id
        name
        code
      }
    }
  `;

  return client.query(QUERY, {}).toPromise();
};
