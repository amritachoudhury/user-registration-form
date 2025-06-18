export const SCHEMA = {
  title: "User Registration",
  fields: [
    { label: "Name", type: "text", name: "name", required: true, minLength: 2 },
    { label: "Age", type: "number", name: "age", min: 1, max: 99 },
    {
      label: "Gender",
      type: "select",
      name: "gender",
      options: ["Male", "Female", "Other"],
    },
    { label: "Address", type: "textarea", name: "address", maxLength: 120, minLength: 2 },
    { label: "Subscribe", type: "checkbox", name: "subscribe" },
  ],
};

export const VALIDATORS = [
  {validator: 'required',
    message: 'Field cannot be empty'
  },
  {validator: 'minLength',
    message: 'Minimum length is '
  },
  {validator: 'min',
    message: 'Value cannot be less than '
  },
  {validator: 'max',
    message: 'Value cannot be more than '
  }
];

export const POSSIBLE_TEXTAREA_FIELDS = [
  "comments",
  "address",
  "description",
  "emailBody",
  "smsBody",
];

export const POSSIBLE_NON_START_WITH_ZERO_NUMBER_FIELDS = [
  "age",
  "total",
  "sum",
  "quantity",
];

export const HOME_PATH = "home";
export const REGISTER_NEW_USER_PATH = "register-new-user";
export const ABOUT_US = "about-us";
export const CONTACT_US = "contact-us";
