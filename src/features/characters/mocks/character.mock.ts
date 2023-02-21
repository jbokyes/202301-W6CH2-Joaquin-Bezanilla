import { CharacterStructure } from "../models/character";

export let MOCK_CHARS: CharacterStructure[] = [
  {
    name: "Joffrey",
    family: "Baratheon",
    age: 19,
    isAlive: true,
    message: "Vais a morir todos!",
    category: "king",
    kingdomYears: 1,
  },
  {
    name: "Jaime",
    family: "Lannister",
    age: 34,
    isAlive: true,
    message: "Primero pego, luego pregunto",
    category: "fighter",
    weapon: "Espada",
    skill: 7,
  },
  {
    name: "Danaerys",
    family: "Targaryen",
    age: 23,
    isAlive: true,
    message: "Primero pego, luego pregunto",
    category: "fighter",
    weapon: "Dragón",
    skill: 9,
  },
];

MOCK_CHARS = [
  ...MOCK_CHARS,
  {
    name: "Tyrion",
    family: "Lannister",
    age: 28,
    isAlive: true,
    message: "No se por qué pero creo que voy a morir pronto",
    category: "counselor",
    chief: MOCK_CHARS[2],
  },
  {
    name: "Tyrion",
    family: "Lannister",
    age: 28,
    isAlive: true,
    message: "Soy un loser",
    category: "squire",
    master: MOCK_CHARS[1],
    submission: 4,
  },
];
