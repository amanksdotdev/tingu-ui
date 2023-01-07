import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";
import { getUIClasses, getSizeClasses } from "./helpers";

describe("Button", () => {
  test("renders the default Button component", () => {
    render(<Button>Click me</Button>);
  });
});

// ColorSchemes
describe("Button", () => {
  test("renders the primary Button component", () => {
    render(<Button colorScheme="primary">Click me</Button>);
  });
  test("renders the secondary Button component", () => {
    render(<Button colorScheme="secondary">Click me</Button>);
  });
  test("renders the success Button component", () => {
    render(<Button colorScheme="success">Click me</Button>);
  });
  test("renders the danger Button component", () => {
    render(<Button colorScheme="danger">Click me</Button>);
  });
  test("renders the info Button component", () => {
    render(<Button colorScheme="info">Click me</Button>);
  });
  test("renders the warning Button component", () => {
    render(<Button colorScheme="warning">Click me</Button>);
  });
});

// Variant
describe("Button", () => {
  test("renders the contained Button component", () => {
    render(<Button variant="contained">Click me</Button>);
  });
  test("renders the outlined Button component", () => {
    render(<Button variant="outlined">Click me</Button>);
  });
});

// Shape
describe("Button", () => {
  test("renders the rounded Button component", () => {
    render(<Button shape="rounded">Click me</Button>);
  });
  test("renders the pill Button component", () => {
    render(<Button shape="pill">Click me</Button>);
  });
  test("renders the sharp Button component", () => {
    render(<Button shape="sharp">Click me</Button>);
  });
});

// Helpers
describe("Button", () => {
  test("getUIClasses function", () => {
    expect(getUIClasses("primary", "contained")).toBe(
      "bg-blue-500 hover:bg-blue-700 text-white"
    );
    expect(getUIClasses("primary", "outlined")).toBe(
      "text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
    );
  });
  test("getSizeClasses function", () => {
    expect(getSizeClasses("small")).toBe("px-4 py-1.5");
    expect(getSizeClasses("large")).toBe("px-8 py-3");
    expect(getSizeClasses("medium")).toBe("px-5 py-2.5");
  });
});
