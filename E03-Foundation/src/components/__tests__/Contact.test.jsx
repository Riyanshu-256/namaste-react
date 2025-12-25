import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page Test Case", () => {
  // To test the heading
  test("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    // assertion => to check
    expect(heading).toBeInTheDocument();
  });

  // to test the button
  test("Should load button inside contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    // assertion => to check
    expect(button).toBeInTheDocument();
  });

  // to test the name
  test("Should load name inside contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");
    // assertion => to check
    expect(inputName).toBeInTheDocument();
  });

  // to check 2 input boxes
  test("Should load 2 input boxes on the contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    // assertion => to check
    expect(inputBoxes.length).toBe(2);
  });
});
