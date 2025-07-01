import {
  getDefaultValues,
  getRules,
  handleNewLineInTextArea,
  handleNumbersStartingWithZero,
} from "./dynamic-render-helper";

describe("dynamic-render-helper", () => {
  describe("getDefaultValues", () => {
    test("should return default value based on input config", () => {
      const today = new Date();
      const fields = [
        {
          label: "Name",
          type: "text",
          name: "name",
          required: true,
          minLength: 2,
        },
        { label: "Age", type: "number", name: "age", min: 1, max: 99 },
        {
          label: "Gender",
          type: "select",
          name: "gender",
          options: ["Male", "Female", "Other"],
        },
        {
          label: "Address",
          type: "textarea",
          name: "address",
          maxLength: 120,
          minLength: 2,
        },
        { label: "Subscribe", type: "checkbox", name: "subscribe" },
        { label: 'Any date', type: 'date', name: 'date1'}
      ];
      const defaultValues = getDefaultValues(fields);
      expect(defaultValues).toEqual({
        name: "",
        age: "",
        gender: "",
        address: "",
        subscribe: false,
        date1: today
      });
    });
  });

  describe("handleNumbersStartingWithZero", () => {
    test("should return value after removing leading zeros when data is available", () => {
      const data = handleNumbersStartingWithZero({ age: "008" });
      expect(data).toEqual({
        age: "8",
      });
    });

    test("should return empty string when field is available but value is empty", () => {
      const data = handleNumbersStartingWithZero({ age: "" });
      expect(data).toEqual({
        age: "",
      });
    });

    test("should return as-is data when field is not available", () => {
        const data = handleNumbersStartingWithZero({ name: 'aaa' });
        expect(data).toEqual({ name: 'aaa' });
      });
  });

  describe("handleNewLineInTextArea", () => {
    test("should return value after replacing \n with <br> when data is available", () => {
      const data = handleNewLineInTextArea({ comments: "a \n b" });
      expect(data).toEqual({ comments: "a <br /> b" });
    });

    test("should return as-is string \n is not present", () => {
        const data = handleNewLineInTextArea({ description: 'This is a description' });
        expect(data).toEqual({ description: 'This is a description' });
      });

    test("should return as-is data when field is not available", () => {
        const data = handleNewLineInTextArea({ name: 'aaa' });
        expect(data).toEqual({ name: 'aaa' });
      });
  });

  describe("getRules", () => {
    test("should return required rule when required is true", () => {
      const field = { required: true };
      const rules = getRules(field);
      expect(rules).toEqual({ required: "Field cannot be empty" });
    });

    test("should return minLength rule when minLength is available", () => {
      const field = { minLength: 4 };
      const rules = getRules(field);
      expect(rules).toEqual({
        minLength: {
          value: 4,
          message: "Minimum length is 4",
        },
      });
    });

    test("should return min rule when min allowed value is available", () => {
      const field = { min: 10 };
      const rules = getRules(field);
      expect(rules).toEqual({
        min: {
          value: 10,
          message: "Value cannot be less than 10",
        },
      });
    });

    test("should return max rule when max allowed value is available", () => {
      const field = { max: 10 };
      const rules = getRules(field);
      expect(rules).toEqual({
        max: {
          value: 10,
          message: "Value cannot be more than 10",
        },
      });
    });

    test("should return minLength rule and required rule when both are available", () => {
      const field = { required: true, minLength: 5 };
      const rules = getRules(field);
      expect(rules).toEqual({
        required: "Field cannot be empty",
        minLength: {
          value: 5,
          message: "Minimum length is 5",
        },
      });
    });

    test("should return min rule and required rule when both are available", () => {
      const field = { required: true, min: 1 };
      const rules = getRules(field);
      expect(rules).toEqual({
        required: "Field cannot be empty",
        min: {
          value: 1,
          message: "Value cannot be less than 1",
        },
      });
    });

    test("should return max rule and required rule when both are available", () => {
      const field = { required: true, max: 10 };
      const rules = getRules(field);
      expect(rules).toEqual({
        required: "Field cannot be empty",
        max: {
          value: 10,
          message: "Value cannot be more than 10",
        },
      });
    });

    test("should return required rule, minLength rule and min rule when both are available", () => {
      const field = { required: true, max: 10 };
      const rules = getRules(field);
      expect(rules).toEqual({
        required: "Field cannot be empty",
        max: {
          value: 10,
          message: "Value cannot be more than 10",
        },
      });
    });

    test("should return required rule, minLength rule and max rule when both are available", () => {
      const field = { required: true, max: 10 };
      const rules = getRules(field);
      expect(rules).toEqual({
        required: "Field cannot be empty",
        max: {
          value: 10,
          message: "Value cannot be more than 10",
        },
      });
    });

    test("should return required rule, max rule and min rule when both are available", () => {
      const field = { required: true, max: 10 };
      const rules = getRules(field);
      expect(rules).toEqual({
        required: "Field cannot be empty",
        max: {
          value: 10,
          message: "Value cannot be more than 10",
        },
      });
    });

    test("should return minLength rule and min value rule when both are available", () => {
      const field = { minLength: 4, min: 10 };
      const rules = getRules(field);
      expect(rules).toEqual({
        minLength: {
          value: 4,
          message: "Minimum length is 4",
        },
        min: {
          value: 10,
          message: "Value cannot be less than 10",
        },
      });
    });

    test("should return minLength rule and max value rule when both are available", () => {
      const field = { minLength: 4, max: 10 };
      const rules = getRules(field);
      expect(rules).toEqual({
        minLength: {
          value: 4,
          message: "Minimum length is 4",
        },
        max: {
          value: 10,
          message: "Value cannot be more than 10",
        },
      });
    });

    
    test("should return minLength rule, min rule and max value rule when all those are available", () => {
      const field = { minLength: 4, min: 1, max: 10 };
      const rules = getRules(field);
      expect(rules).toEqual({
        minLength: {
          value: 4,
          message: "Minimum length is 4",
        },
        min: {
          value: 1,
          message: "Value cannot be less than 1",
        },
        max: {
          value: 10,
          message: "Value cannot be more than 10",
        },
      });
    });

    test("should return min rule and max value rule when both are available", () => {
      const field = { min: 4, max: 10 };
      const rules = getRules(field);
      expect(rules).toEqual({
        min: {
          value: 4,
          message: "Value cannot be less than 4",
        },
        max: {
          value: 10,
          message: "Value cannot be more than 10",
        },
      });
    });   

    test("should return all rules when all are available", () => {
      const field = { required: true, max: 10, min: 2, minLength: 1 };
      const rules = getRules(field);
      expect(rules.minLength.value).toEqual(1);
      expect(rules.minLength.message).toEqual("Minimum length is 1");
      expect(rules.required).toBe("Field cannot be empty");
      expect(rules.min.value).toEqual(2);
      expect(rules.min.message).toEqual("Value cannot be less than 2");
      expect(rules.max.value).toEqual(10);
      expect(rules.max.message).toEqual("Value cannot be more than 10");
    });

    test("should return without looping if none of the fields contain validation ", () => {
      const field = {};
      const rules = getRules(field);
      expect(rules).toEqual({});
    });
  });
});
