export type CharacterStructure = {
  species: Species;
  series: string;
  name: string;
  family: string;
  age: number;
  isAlive: boolean;
  weapon?: string;
  dexterity?: number;
  kingdomYears?: number;
  assess?: string;
  knight?: string;
};

export type Species = "counselor" | "squire" | "king" | "fighter";
