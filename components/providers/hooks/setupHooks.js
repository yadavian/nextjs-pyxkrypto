import { handler as createWalletHook } from "./useWallet";

export const setupHooks = () => {
  return {
    useWallet: createWalletHook(),
  };
};
