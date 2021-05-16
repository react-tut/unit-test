import { screen, render } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("renders posts if request successds", async () => {
    //Arrange
    const posts = [
      {
        id: 1,
        title: "First Post",
      },
    ];
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => posts,
    });
    render(<Async />);

    // Act
    // ... nothing

    // Assert
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).toHaveLength(posts.length);
  });
});
