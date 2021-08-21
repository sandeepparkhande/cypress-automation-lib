import { FormGroup, KeyLabelValue } from "./form-group";

export class FormFields {
  constructor() {}

  fillForms() {
    const formGroup = new FormGroup();
    this.typeFormField(formGroup.fullName);
    this.typeFormField(formGroup.firstName);
    this.typeFormField(formGroup.lastName);
    this.typeFormField(formGroup.address);
    this.typeFormField(formGroup.city);
    this.typeFormField(formGroup.state);
    this.typeFormField(formGroup.country);
  }
  typeFormField(keyValueLabel: KeyLabelValue) {
    cy.log(" Filling input fields ", keyValueLabel.label);
    cy.get(keyValueLabel.selector).type(keyValueLabel.value);
  }
}
