import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";

test("App is rendered", () => {
  expect(() =>
    render(
      <QueryClientProvider client={new QueryClient()}>
        <App />
      </QueryClientProvider>
    )
  ).not.toThrow();
});
