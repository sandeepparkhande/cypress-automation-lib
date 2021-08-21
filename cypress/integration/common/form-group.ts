export class FormGroup {
  constructor() {}
  fullName = new KeyLabelValue(
    "fullName",
    "#text-00000008",
    "Sandeep Parkhande"
  );
  firstName = new KeyLabelValue(
    "",
    '[data-hash="00000009"] > [data-role="control"] > div > [data-index="1"]',
    "Snadeep"
  );
  lastName = new KeyLabelValue(
    "",
    '[data-hash="00000009"] > [data-role="control"] > div > [data-index="2"]',
    "Parkhande"
  );
  address = new KeyLabelValue(
    "",
    '[data-hash="0000000b"] > [data-role="control"] > [data-is-first-row="1"] > input',
    "Pune"
  );
  city = new KeyLabelValue(
    "",
    '[data-role="control"] > :nth-child(5) > [data-index="3"]',
    "Pune"
  );
  state = new KeyLabelValue(
    "",
    '[data-role="control"] > :nth-child(5) > [data-index="4"]',
    "MH"
  );

  country = new KeyLabelValue(
    "",
    '[data-hash="0000000b"] > [data-role="control"] > [data-is-last-row="1"] > div > input',
    "Ireland"
  );
}

export class KeyLabelValue {
  label: any;
  selector: any;
  value: any;

  constructor(label: any, selector: any, value: any) {
    this.label = label;
    this.selector = selector;
    this.value = value;
  }
}
