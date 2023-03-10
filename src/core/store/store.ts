import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { characterReducer } from "../../features/characters/reducer/character.reducer";

export const store = configureStore({
  reducer: {
    character: characterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
