/* eslint-disable jest/no-conditional-expect */
import {
  CharacterApiRepo,
  CharacterApiRepoStructure,
} from "./character.api.repo";
import { CharacterStructure } from "../models/character";

describe("Given the CharsApiRepo class", () => {
  describe("When we instance the parameters", () => {
    let repo: CharacterApiRepoStructure;

    beforeEach(() => {
      repo = CharacterApiRepo();
    });

    test("Then, it should it fetch the data from our api", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue([]) as unknown as CharacterStructure,
      });

      const result = await repo.loadCharacters();
      expect(result).toEqual([]);
    });

    describe("When we try to fetch", () => {
      test("Then if we get an error", async () => {
        global.fetch = jest.fn().mockResolvedValue({
          ok: false,
          status: "503",
          statusText: "api is down",
          json: jest
            .fn()
            .mockResolvedValue([]) as unknown as CharacterStructure,
        });

        try {
          await repo.loadCharacters();
        } catch (error) {
          expect((error as Error).message).toBe("Error Http: 503. api is down");
        }
      });
    });

    describe("When we try to make a fetch", () => {
      test("Then, if we got an error it should clg the error", async () => {
        global.fetch = jest.fn().mockResolvedValue({
          ok: false,
          status: "503",
          statusText: "api is down",
          json: jest.fn(),
        });
        try {
          await repo.updateCharacters("paco");
        } catch (error) {
          expect((error as Error).message).toBe("Error Http: 503. api is down");
        }
      });
      test("Then if we update a character it should", async () => {
        global.fetch = jest.fn().mockResolvedValue({
          ok: true,
          json: jest
            .fn()
            .mockResolvedValue([]) as unknown as CharacterStructure,
        });

        const result = await repo.updateCharacters("pepe");
        expect(result).toEqual([]);
      });
    });
  });
});
