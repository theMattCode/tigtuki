import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders example button", () => {
  render(<App />);
  const button = screen.getByTestId("example-button");
  expect(button).toBeInTheDocument();
});
