import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../core/store/store";
import { CharacterStructure } from "../models/character";
import * as ac from "../reducer/character.actions.creator";
import { CharacterApiRepoStructure } from "../services/character.api.repo";

export function useChars(repo: CharacterApiRepoStructure) {
  const chars = useSelector((state: RootState) => state.character);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const loadChars = async () => {
      try {
        const data = await repo.loadCharacters();
        dispatch(ac.loadCreator(data));
      } catch (error) {
        console.log((error as Error).message);
      }
    };
    loadChars();
  }, [dispatch, repo]);

  const updateChars = async (char: CharacterStructure["name"]) => {
    try {
      const updatedChar = await repo.updateCharacters(char);
      dispatch(ac.updateCreator(updatedChar));
    } catch (error) {
      console.log((error as Error).message);
    }
  };
  return {
    chars,
    updateChars,
  };
}
