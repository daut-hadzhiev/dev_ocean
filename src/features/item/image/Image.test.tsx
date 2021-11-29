import { render, screen } from "@testing-library/react";

import { mockData } from "../../list/listConsts";
import { ResponsiveImage } from "./Image";

const cutUrl = (src: string) => src.slice(0, src.lastIndexOf("jpg&h="));

test("renders learn react link", () => {
  render(<ResponsiveImage src={mockData[0].image} />);

  expect(screen.getByRole("img")).toHaveClass("image");
  expect(screen.getByRole("img")).toHaveProperty("srcset");
});

test("Broken link", () => {
  render(
    <ResponsiveImage
      src={cutUrl(mockData[0].image)} // short link
    />
  );

  expect(screen.getByRole("img")).toHaveClass("image");
  expect(screen.getByRole("img")).toHaveProperty("srcset");
});
