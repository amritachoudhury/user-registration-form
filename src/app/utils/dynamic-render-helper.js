import {
  POSSIBLE_NON_START_WITH_ZERO_NUMBER_FIELDS,
  POSSIBLE_TEXTAREA_FIELDS,
  VALIDATORS,
} from "./constants";

export const getDefaultValues = (fields) =>
  fields.reduce((acc, currVal) => {
    acc[currVal.name] =
      currVal.type === "checkbox"
        ? false
        : currVal.type === "date"
        ? new Date()
        : "";
    return acc;
  }, {});

export const handleNumbersStartingWithZero = (data) => {
  POSSIBLE_NON_START_WITH_ZERO_NUMBER_FIELDS.map((numberField) => {
    if (!!data[numberField] && data[numberField].length) {
      data[numberField] = Number(data[numberField]).toString();
    }
  });
  return data;
};

export const handleNewLineInTextArea = (data) => {
  POSSIBLE_TEXTAREA_FIELDS.map((textareaField) => {
    if (!!data[textareaField]) {
      data[textareaField] = data[textareaField]?.includes("\n")
        ? data[textareaField]?.replaceAll("\n", "<br />")
        : data[textareaField];
    }
  });
  return data;
};

export const getRules = (field) => {
  let rules = {};

  if (!VALIDATORS.some((res) => Object.keys(field).includes(res.validator))) {
    return rules;
  }

  VALIDATORS.map((res) => {
    if (field.required && res.validator === "required") {
      rules.required = res.message;
    } else {
      if (field && field[res.validator]) {
        rules[res.validator] = {
          value: field[res.validator],
          message: res.message + field[res.validator],
        };
      } else {
        return;
      }
    }
  });

  return rules;
};
