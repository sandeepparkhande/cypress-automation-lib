import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://google.com";

Given(`I open Google page`, () => {
  cy.visit(url);
});

And(`I type Cognizant page`, () => {
  cy.get(".gLFyf").type("Cognizant");
});

Then(`I see {string} in the title`, (title) => {
  cy.title().should("include", title);
});
