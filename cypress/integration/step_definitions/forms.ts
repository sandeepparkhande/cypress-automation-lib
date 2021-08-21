import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import { FormFields } from "../common/form-fields";
import { FormGroup } from "./../common/form-group";

const url = "https://google.com";

Given(`I visit to form URL`, () => {
  cy.visit("https://form.123formbuilder.com/5978120/form");
});

Then(`I fill cypres forms`, () => {
  cy.get("#text-00000008").type("Sandeep Parkhande");
  cy.get(
    '[data-hash="00000009"] > [data-role="control"] > div > [data-index="1"]'
  ).type("Snadeep");
  cy.get(
    '[data-hash="00000009"] > [data-role="control"] > div > [data-index="2"]'
  ).type("Parkhande");
  cy.get(
    '[data-hash="0000000b"] > [data-role="control"] > [data-is-first-row="1"] > input'
  ).type("Pune");
  cy.get('[data-role="control"] > :nth-child(5) > [data-index="3"]').type(
    "Pune"
  );
  cy.get('[data-role="control"] > :nth-child(5) > [data-index="4"]').type("MH");

  cy.get(
    '[data-hash="0000000b"] > [data-role="control"] > [data-is-last-row="1"] > div > input'
  ).type("Ireland");
});

Then(`I fill forms using page object model`, () => {
  const formFields = new FormFields();
  formFields.fillForms();
});
