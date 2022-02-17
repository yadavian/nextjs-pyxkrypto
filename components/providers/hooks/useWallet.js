import axios from "axios";
import useSWR from "swr";

export const handler = () => () => {
  const { data, mutate, ...rest } = useSWR(
    () => (web3 ? "appBased/wallet" : null),
    async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/wallet/details`
        );

        return response.data[0];
      } catch (error) {
        return null;
      }
    }
  );

  return {
    mutate,
    data,
    ...rest,
  };
};
