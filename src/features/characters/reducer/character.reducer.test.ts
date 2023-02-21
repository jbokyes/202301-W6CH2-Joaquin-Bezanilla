import { MOCK_CHARS } from "../mocks/character.mock";
import { loadCreator } from "./character.actions.creator";
import { characterReducer } from "./character.reducer";
describe("Given the characterReducer function", () => {
  describe("When we load an array of characters", () => {
    test("Then it should load MOCK_CHARS", () => {
      let result = characterReducer([], loadCreator(MOCK_CHARS));
      expect(result).toEqual(MOCK_CHARS);
    });
  });
});
