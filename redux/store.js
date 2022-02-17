import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  REHYDRATE,
  PAUSE,
  FLUSH,
  PURGE,
  PERSIST,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { authReducer, walletReducer } from "./slice";

const rootReducer = combineReducers({
  auth: authReducer,
  wallet: walletReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
