import { PLAYERS } from "../../data.js";
import Player from "../Player/Player.jsx";

export default function Players() {
  return (
    <>
      <h2>Player Summary</h2>
      <section className="player-details">
        <ul>
          {PLAYERS.map((player) => (
            <Player key={player.title} {...player} />
          ))}
        </ul>
      </section>
    </>
  );
}
