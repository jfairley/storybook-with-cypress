/// <reference types="cypress" />

describe("Button", () => {
  it("should render", () => {
    cy.visit("http://localhost:6006/iframe.html?id=example-button--primary");
    cy.get(".storybook-button").should("have.text", "Button");
    cy.window().then((win) => {
      cy.log("coverage object", win.__coverage__);
    });
  });
});
