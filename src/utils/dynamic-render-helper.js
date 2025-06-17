import { SCHEMA, VALIDATORS } from "./constants";

export const getDefaultValues = () =>
  SCHEMA.fields.reduce((acc, currVal) => {
    acc[currVal.name] = currVal.type === "checkbox" ? false : "";
    return acc;
  }, {});

  

export const getRules = (field) => {

  if(!VALIDATORS.some(res => Object.keys(field).includes(res.validator))) {
    return
  }

  let rules = {}

  VALIDATORS.map(validator => {
    rules[validator.validator] = validator.validator === 'required' ? '' : {
      value: 0,
      message: ''
    }
  })
  //  = {
  //   required: "",
  //   minLength: {
  //     value: 0,
  //     message: "",
  //   },
  //   min: {
  //     value: 0,
  //     message: "",
  //   },
  //   max: {
  //     value: 0,
  //     message: "",
  //   },
  //   minRows: {
  //     value: 0,
  //     message: "",
  //   },
  //   maxRows: {
  //     value: 0,
  //     message: "",
  //   },
  // };

  // if (!VALIDATORS.some((validator) => Object.keys(field).includes(validator))) {
  //   return;
  // }

  VALIDATORS.map(res => {
    if (field.required && res.validator === 'required') {
      rules.required = res.message
    } else {
      if (field && field[res.validator]) {
        rules[res.validator] = {
          value: field[res.validator],
          message: res.message + field[res.validator]
        }
      }
      else {
        return
      }
    }
  })

  // if (field.required) {
  //   rules.required = "Field cannot be empty.";
  // }

  // if (field.minLength) {
  //   rules.minLength = {
  //     value: field.minLength,
  //     message: `Please provide at least ${field.minLength} characters`,
  //   };
  // }

  // if (field.min) {
  //   rules.min = {
  //     value: field.min,
  //     message: `Value cannot be less than ${field.min}`,
  //   };
  // }

  // if (field.max) {
  //   rules.max = {
  //     value: field.max,
  //     message: `Value cannot be more than ${field.max}`,
  //   };
  // }

  return rules;
};

