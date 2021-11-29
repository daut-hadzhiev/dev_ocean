import { render, screen } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

import { mockData } from "../list/listConsts";
import { Nearby } from "./Nearby";

test("renders learn react link", () => {
  render(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter>
        <Nearby placesByCity={mockData} />
      </MemoryRouter>
    </QueryClientProvider>
  );

  expect(screen.getByRole("link")).toHaveTextContent(mockData[0].name);
  expect(screen.getByRole("heading")).toHaveTextContent("Nearby");
  expect(screen.getByRole("row")).toHaveTextContent(mockData[0].address.city);
});
