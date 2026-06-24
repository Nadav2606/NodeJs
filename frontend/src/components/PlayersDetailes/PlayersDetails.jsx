import { useState } from "react";
import Button from "../Button/Button";
import { PLAYERS_ACTION } from "../../data";

export default function PlayersDetails() {
  const [playerDetails, setPlayerDetails] = useState();

  function handlePlayerSummary(player) {
    setPlayerDetails(player);
  }

  return (
    <>
      <section className="player-details">
        <menu>
          <Button onClick={() => handlePlayerSummary("messi")}>
            Lionel Messi
          </Button>

          <Button onClick={() => handlePlayerSummary("ronaldo")}>
            Cristiano Ronaldo
          </Button>

          <Button onClick={() => handlePlayerSummary("vini")}>
            Vinícius Júnior
          </Button>

          <Button onClick={() => handlePlayerSummary("mbappe")}>
            Kylian Mbappé
          </Button>

          <Button>Erling Haaland</Button>
          <Button>Kevin De Bruyne</Button>
          <Button>Mohamed Salah</Button>
          <Button>Luka Modric</Button>
          <Button>Jude Bellingham</Button>
          <Button>Neymar Jr</Button>
        </menu>
      </section>
      {playerDetails && (
        <section className="actions">
          <h2>{PLAYERS_ACTION[playerDetails].title}</h2>
          <img
            src={PLAYERS_ACTION[playerDetails].image}
            alt={PLAYERS_ACTION[playerDetails].title}
          />
          <p>{PLAYERS_ACTION[playerDetails].description}</p>
        </section>
      )}
      {!playerDetails && (
        <p className="fallback">Click on the Buttons to view player ☝️</p>
      )}
    </>
  );
}
