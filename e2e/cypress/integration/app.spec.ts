/// <reference path="../support/index.d.ts" />

it("works", () => {
  cy.visit("/");
  cy.getByTestId("example-button");
});

export {};
