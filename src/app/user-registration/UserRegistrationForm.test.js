import React from "react";

import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import UserRegistrationForm from "./UserRegistrationForm";

describe("UserRegistrationForm", () => {
  test("should render the registration form", () => {
    render(<UserRegistrationForm />);
    expect(screen.getByText("User Registration")).toBeInTheDocument();
  });

  test("should show validation error when required field is empty", async () => {
    render(<UserRegistrationForm />);
    const submitBtn = screen.getByText("SUBMIT");
    fireEvent.click(submitBtn);

    expect(
      await screen.findAllByText("Field cannot be empty")
    ).not.toHaveLength(0);
  });

  test("should show validation error when minLength is not satisfied", async () => {
    render(<UserRegistrationForm />);
    fireEvent.change(screen.getByPlaceholderText("Enter name"), {
      target: { value: "a" },
    });
    const submitBtn = screen.getByText("SUBMIT");
    fireEvent.click(submitBtn);

    expect(await screen.findAllByText("Minimum length is 2")).not.toHaveLength(
      0
    );
  });

  test("should show validation error when min value is not satisfied", async () => {
    render(<UserRegistrationForm />);
    fireEvent.change(screen.getByPlaceholderText("Enter age"), {
      target: { value: "0" },
    });
    const submitBtn = screen.getByText("SUBMIT");
    fireEvent.click(submitBtn);

    expect(
      await screen.findAllByText("Value cannot be less than 1")
    ).not.toHaveLength(0);
  });

  test("should show validation error when min value is not satisfied", async () => {
    render(<UserRegistrationForm />);
    fireEvent.change(screen.getByPlaceholderText("Enter age"), {
      target: { value: "100" },
    });
    const submitBtn = screen.getByText("SUBMIT");
    fireEvent.click(submitBtn);

    expect(
      await screen.findAllByText("Value cannot be more than 99")
    ).not.toHaveLength(0);
  });

  test("should clear form data", () => {
    render(<UserRegistrationForm />);
    fireEvent.change(screen.getByPlaceholderText("Enter name"), {
      target: { value: "aaa" },
    });
    fireEvent.click(screen.getByText("CLEAR"));
    expect(screen.getByPlaceholderText("Enter name")).toBeInTheDocument();
  });

  test("should submit data and open dialog when no validation error and submit is pressed", async () => {
    render(<UserRegistrationForm />);
    fireEvent.change(screen.getByPlaceholderText("Enter name"), {
      target: { value: "aaa" },
    });
    fireEvent.click(screen.getByText("SUBMIT"));
    await waitFor(() => {
      expect(screen.getByText("Preview data")).toBeInTheDocument();
    });
  });
});
