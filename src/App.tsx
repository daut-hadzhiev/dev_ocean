import React from "react";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import styles from "./App.module.css";
import { getRoutePath } from "./app/utils";
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
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.appContainer}>
        <BrowserRouter>
          <Switch>
            <Route path={getRoutePath("/")}>
              <List />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
