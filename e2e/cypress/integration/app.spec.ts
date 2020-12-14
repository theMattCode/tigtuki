/// <reference path="../support/index.d.ts" />

it("works", () => {
  cy.visit("http://localhost:3000");
  cy.getByTestId("example-button");
});

export {};
