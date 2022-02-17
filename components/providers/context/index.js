import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { setupHooks } from "../hooks/setupHooks";

const AppContext = createContext(null);

const createWeb3State = () => {
  return {
    hooks: setupHooks(),
  };
};

export default function AppBasedProvider({ children }) {
  const [appBasedApi, setAppBasedApi] = useState(createWeb3State());

  const _appBasedApi = useMemo(() => {
    return { ...appBasedApi };
  }, [appBasedApi]);

  return (
    <AppContext.Provider value={_appBasedApi}>{children}</AppContext.Provider>
  );
}

export function useAppBased() {
  return useContext(AppContext);
}

export function useHooks(cb) {
  const { hooks } = useAppBased();
  return cb(hooks);
}
