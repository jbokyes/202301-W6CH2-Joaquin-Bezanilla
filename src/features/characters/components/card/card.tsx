export function Card() {
  return (
    <ul className="characters-list row list-unstyled">
      {chars.map((character) => {
        return (
          <li className="character col" key={character.name}>
            <div className="card character__card">
              <img
                src={character.path}
                alt={character.name + character.family}
                className="character__picture card-img-top"
              />
              <div className="card-body">
                <h2 className="character__name card-title h4">
                  {character.name} {character.family}
                </h2>
                <div className="character__info">
                  <ul className="list-unstyled">
                    <li>Edad: {character.age}</li>
                    <li>
                      Estado:{" "}
                      {character.state() ? (
                        <i className="fas fa-thumbs-up"></i>
                      ) : (
                        <i className="fas fa-thumbs-down"></i>
                      )}
                    </li>
                  </ul>
                </div>
                <div className="character__overlay">
                  <ul className="list-unstyled">
                    {character instanceof King && (
                      <li>Años de reinado: {character.reign}</li>
                    )}
                    {character instanceof Brawler && (
                      <li>Arma: {character.weapon}</li>
                    )}
                    {character instanceof Brawler && (
                      <li>Destreza: {character.dexterity}</li>
                    )}

                    {character instanceof Squire && (
                      <li>Peloteo: {character.assKissing()}</li>
                    )}
                    {character instanceof RightHand && (
                      <li>Asesora a: {character.hand()}</li>
                    )}

                    {character instanceof Squire && (
                      <li>Sirve a: {character.knight}</li>
                    )}
                  </ul>
                  <div className="character__actions">
                    <button
                      className="character__action btn"
                      onClick={character.state}
                    >
                      habla
                    </button>
                    <button
                      className="character__action btn"
                      onClick={character.perish}
                    >
                      muere
                    </button>
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
