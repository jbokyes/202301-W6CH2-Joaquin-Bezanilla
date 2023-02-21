import { render } from "@testing-library/react";
import App from "./App";
import { CardContainer } from "../../../features/characters/components/card.container/card.container";
jest.mock(
  "../../../features/characters/components/card.container/card.container"
);
describe("Given the app component", () => {
  describe("When it's rendered", () => {
    test("Then it should contain CardContainer", () => {
      render(<App />);

      expect(CardContainer).toHaveBeenCalled();
    });
  });
});
