import { createReducer } from "@reduxjs/toolkit";
import { CharacterStructure } from "../models/character";
import * as ac from "./character.actions.creator";

const initialState: CharacterStructure[] = [];

export const characterReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.loadCreator, (_state, { payload }) => payload);
});
