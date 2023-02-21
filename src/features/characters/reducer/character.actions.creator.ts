import { createAction } from "@reduxjs/toolkit";
import { CharacterStructure } from "../models/character";
import { characterActions } from "./character.actions.types";

export const loadCreator = createAction<CharacterStructure[]>(
  characterActions.load
);

export const updateCreator = createAction<CharacterStructure>(
  characterActions.update
);
