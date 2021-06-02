import { Given, And } from "cypress-cucumber-preprocessor/steps";

const url = "https://google.com";

Given(`I open Google page`, () => {
  cy.visit(url);
});

And(`I type Cognizant page`, () => {
  cy.get(".gLFyf").type("Cognizant");
});
