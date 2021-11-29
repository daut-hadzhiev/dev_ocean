import React from "react";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import styles from "./App.module.css";
import { useBusinesses } from "./app/api/useBusinesses";
import { getRoutePath } from "./app/utils";
import { Spinner } from "./features/common/spinner/Spinner";
import { ErrorPage } from "./features/error/Error";
import { Header } from "./features/header/Header";
import { Item } from "./features/item/Item";
import { List } from "./features/list/List";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache(),
});

function App() {
  const { data: businesses, isLoading } = useBusinesses();

  return (
    <div className={styles.appContainer}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <div className={styles.mainWrapper}>
            {isLoading && !businesses ? (
              <Spinner />
            ) : (
              <Switch>
                <Route path={getRoutePath("/places/:id")}>
                  <Item />
                </Route>
                <Route path={getRoutePath("/places")}>
                  <List list={businesses} />
                </Route>
                <Route>
                  <ErrorPage />
                </Route>
              </Switch>
            )}
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
