import React from "react";
import ReactDOM from "react-dom";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
// import { useQuery } from "react-query";

import "./index.css";

import App from "./App";
// import { fetchBusinesses } from "./features/list/listAPI";
// import { BusinessApiUrl, BusinessProps } from "./features/list/listConsts";
import * as serviceWorker from "./serviceWorker";

// const businessesResult = useQuery<BusinessProps[], Error>(
//   "businesses",
//   async () => await fetchBusinesses(BusinessApiUrl)
// );

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // set to false as data is not expected to be dynamic for the businesses API
    },
  },
  queryCache: new QueryCache(),
});

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
