import { CharacterStructure } from "../models/character";

export interface CharacterApiRepoStructure {
  loadCharacters(): Promise<CharacterStructure[]>;
  updateCharacters(
    char: CharacterStructure["name"]
  ): Promise<CharacterStructure>;
}
const url = "http://localhost:4200/characters";

const loadCharacters = async (): Promise<CharacterStructure[]> => {
  const resp = await fetch(url);
  if (!resp.ok)
    throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
  const data = (await resp.json()) as CharacterStructure[];
  return data;
};

const updateCharacters = async (
  char: CharacterStructure["name"]
): Promise<CharacterStructure> => {
  const resp = await fetch(`${url}/${char}`);
  if (!resp.ok)
    throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
  const data = (await resp.json()) as CharacterStructure;
  return data;
};

export const CharacterApiRepo = (): CharacterApiRepoStructure => {
  return {
    loadCharacters,
    updateCharacters,
  };
};
