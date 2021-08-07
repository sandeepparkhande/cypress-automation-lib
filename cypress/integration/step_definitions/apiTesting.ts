import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://google.com";

Given(`I am testng GET API`, () => {
  cy.request("https://jsonplaceholder.cypress.io/comments").then((response) => {
    expect(response.body).to.have.length(500);
    expect(response).to.have.property("headers");
    expect(response).to.have.property("duration");
  });
});

Given(`I am testng BASE 64 IMG Encoding`, () => {
  cy.request({
    url: "https://m.media-amazon.com/images/I/51FBc82t6XL._SR1242,870_.jpg",
    encoding: "base64",
  }).then((response) => {
    const base64Content = response.body;
    const mime = response.headers["content-type"]; // or 'image/png'
    // see https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    const imageDataUrl = `data:${mime};base64,${base64Content}`;
  });
});
