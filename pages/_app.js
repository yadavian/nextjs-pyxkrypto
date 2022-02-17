import buildClient from "apiClient/buildClient";
import axios from "axios";
import { Provider } from "react-redux";
import store from "redux/store";
import { persistStore } from "redux-persist";
import "../styles/globals.css";
import { PersistGate } from "redux-persist/integration/react";

axios.defaults.withCredentials = true;

const Noop = ({ children }) => <>{children}</>;

let persistor = persistStore(store);

function AppComponent({ Component, pageProps, currentUser }) {
  const Layout = Component.Layout ?? Noop;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout currentUser={currentUser}>
          <Component currentUser={currentUser} {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

AppComponent.getInitialProps = async (appContext) => {
  const { data } = await buildClient({
    req: appContext.ctx.req,
    path: "user/current-user",
  });

  let pageProps = {};

  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return { pageProps, ...data };
};

export default AppComponent;
