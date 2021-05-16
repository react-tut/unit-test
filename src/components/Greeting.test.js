import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders 'Hello World' as a test", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello world", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'good to see you' if the button was NOT clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const goodToSeeYouElement = screen.getByText("good to see you", { exact: false });
    expect(goodToSeeYouElement).toBeInTheDocument();
  });

  test("renders 'Changed' if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const changedElement = screen.getByText("Changed");
    expect(changedElement).toBeInTheDocument();
  });

  test("does not renders 'good to see you' if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const goodToSeeYouElement = screen.queryByText("good to see you", { exact: false});
    expect(goodToSeeYouElement).toBeNull();
  });
});
