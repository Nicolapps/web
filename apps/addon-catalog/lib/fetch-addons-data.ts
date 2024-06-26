import { validateResponse } from '@repo/utils';
import { fetchAddonsQuery, gql } from '../lib/fetch-addons-query';

type AddonValue = Addon['name'];

interface AddonsData {
  addons: Pick<Addon, 'name'>[];
}

export async function fetchAddonsData() {
  try {
    let value: AddonValue[] = [];
    async function fetchPartialData(skip: number = 0) {
      const data = await fetchAddonsQuery<AddonsData, { skip: number }>(
        gql`
          query Addons($skip: Int!) {
            addons(limit: 30, skip: $skip) {
              name
            }
          }
        `,
        {
          variables: { skip },
        },
      );

      validateResponse(() => data.addons);

      const { addons } = data;

      value = [...value, ...addons.map(({ name }) => name)];

      if (addons.length > 0) await fetchPartialData(skip + addons.length);

      return value;
    }

    return await fetchPartialData();
  } catch (error) {
    // @ts-expect-error - Seems safe
    throw new Error(`Failed to fetch addons data: ${error.message}`);
  }
}
