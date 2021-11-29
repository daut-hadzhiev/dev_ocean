import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

import { mockData } from "../list/listConsts";
import { List } from "./List";

test("Table Layout", () => {
  render(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter>
        <List list={mockData} />
      </MemoryRouter>
    </QueryClientProvider>
  );

  expect(screen.getAllByRole("columnheader")[0]).toHaveTextContent("Name");
  expect(screen.getByText("Description")).toBeDefined();

  expect(screen.getByRole("link")).toHaveTextContent(mockData[0].name);
  expect(screen.getAllByRole("cell")[0]).toHaveTextContent(mockData[0].name);
  expect(screen.getAllByRole("cell")[1]).toHaveTextContent(
    mockData[0].description
  );
});
