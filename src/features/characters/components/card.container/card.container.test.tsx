import { render, screen } from "@testing-library/react";
import { CardContainer } from "./card.container";

describe("Given CardContainer component", () => {
  render(<CardContainer></CardContainer>);
  describe("When it is rendered", () => {
    test("Then it should contain an unordered list", () => {
      const list = screen.getByRole("list");
      expect(list).toBeInTheDocument();
    });
  });
});
