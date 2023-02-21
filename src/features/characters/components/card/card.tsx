import { useMemo } from "react";
import { useChars } from "../../hooks/use.characters";
import { MOCK_CHARS } from "../../mocks/character.mock";
import { CharacterStructure } from "../../models/character";
import { CharacterApiRepo } from "../../services/character.api.repo";

export function Card() {
  const repo = useMemo(() => CharacterApiRepo(), []);
  const { chars } = useChars(repo);
  console.log(chars);
  return (
    <ul className="characters-list row list-unstyled">
      {chars.map((character: CharacterStructure) => {
        return (
          <li className="character col" key={character.name}>
            <div className="card character__card">
              <div className="card-body">
                <h2 className="character__name card-title h4">
                  {character.name} {character.family}
                </h2>
                <div className="character__info">
                  <ul className="list-unstyled">
                    <li>Edad: {character.age}</li>
                    <li>Estado: </li>
                  </ul>
                </div>
                <div className="character__overlay">
                  <ul className="list-unstyled"></ul>
                  <div className="character__actions">
                    <button className="character__action btn">habla</button>
                    <button className="character__action btn">muere</button>
                  </div>
                </div>
              </div>
              <i className="emoji"></i>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
