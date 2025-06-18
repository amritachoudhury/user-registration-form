import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { SCHEMA } from "../utils/constants";
import { getDefaultValues, getRules, handleNumbersStartingWithZero } from "../utils/dynamic-render-helper";
import DataPreview from "./DataPreview";

export default function UserRegistrationForm() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: getDefaultValues(SCHEMA.fields),
  });

  const [formData, setFormData] = useState(null);

  const [dialogOpen, setDialogOpen] = useState(false);

  const toggleDialog = (isOpen) => () => {
    setDialogOpen(isOpen);
  };

  const onSubmit = (data) => {
    data = handleNumbersStartingWithZero(data);
    setFormData(data);
  };

  const handleReset = () => {
    reset(getDefaultValues(SCHEMA.fields));
    setFormData(null);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="scrollable-container">
          <div className="form-container">
            <h2>{SCHEMA.title}</h2>
            {SCHEMA.fields.map((ele) => (
              <div key={ele.name} className="search-bar">
                <label className="form-label">
                  {ele.label}
                  {ele.required && <p className="required-asterisk">&nbsp;*</p>}
                </label>
                <Controller
                  name={ele.name}
                  control={control}
                  rules={getRules(ele)}
                  render={({ field: controllerField }) => {
                    switch (ele.type) {
                      case "text":
                      case "number":
                        return (
                          <TextField
                            {...controllerField}
                            type={ele.type}
                            placeholder={`Enter ${ele.label.toLowerCase()}`}
                            error={
                              errors[ele.name] &&
                              errors[ele.name].message &&
                              errors[ele.name].message.length
                            }
                            helperText={errors[ele.name]?.message}
                            onKeyDown={(event) => {
                              if (
                                ele.type === "number" &&
                                ele.name === "age" &&
                                (event.key === "e" ||
                                  event.key === "E" ||
                                  event.key === "-" ||
                                  event.key === "+")
                              ) {
                                event.preventDefault();
                              }
                            }}
                          />
                        );
                      case "checkbox":
                        return (
                          <input
                            {...controllerField}
                            type="checkbox"
                            className="checkbox"
                            checked={!!controllerField.value}
                          />
                        );
                      case "select":
                        return (
                          <select
                            className="select-dropdown"
                            {...controllerField}
                          >
                            <option className="select-option" value="">
                              {`Select ${ele.label.toLowerCase()}`}
                            </option>
                            {ele.options.map((opt) => (
                              <option
                                className="select-option"
                                key={opt}
                                value={opt}
                              >
                                {opt}
                              </option>
                            ))}
                          </select>
                        );
                      case 'textarea':
                      return (
                        <div className="textarea-container">
                        <textarea
                          {...controllerField}
                          placeholder={`Enter ${ele.label.toLowerCase()}`}
                          maxLength={ele.maxLength ?? null}
                        >
                        </textarea>
                        {ele.maxLength ? <span className="textarea-limit">{controllerField.value.length}/{ele.maxLength}</span> : null}
                        </div>
                      )
                      default:
                        return null;
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </section>
        <DataPreview
        data={formData}
        open={dialogOpen}
        onClose={toggleDialog(false)}
      />
        <footer>
          <section className="btn-container">
            <Button variant="outlined" onClick={handleReset}>
              CLEAR
            </Button>
            <Button
              variant="contained"
              disableElevation
              type="submit"
              className="submit"
              onClick={toggleDialog(true)}
              disabled={Object.keys(errors).length}
            >
              SUBMIT
            </Button>
          </section>
        </footer>
      </form>
    </>
  );
}
