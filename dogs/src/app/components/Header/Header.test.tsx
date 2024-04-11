import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header Component", () => {
  test("should render header text when provided", () => {
    const headerText = "Dogs";
    render(<Header headerText={headerText} />);
    const headerElement = screen.getByTestId("header-text");
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent(headerText);
  });

  test("should render image when img is provided", () => {
    const imgSrc = "/static/assets/nowatch-logo.svg";
    const altText = "nowatch-logo";
    render(<Header imgSrc={imgSrc} altText={altText} />);
    const image = screen.getByRole("img", { name: altText });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", expect.stringContaining(imgSrc));
  });

  test("should  not render an image when img is not provided", () => {
    render(<Header />);
    const images = screen.queryByRole("img");
    expect(images).not.toBeInTheDocument();
  });
});
