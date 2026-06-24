import logo from "../../assets/worldcup.jpg";

const randomWords = ["live", "news", "game", "events", "update"];

const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

export default function Header() {
  return (
    <header>
      <img src={logo} alt="world-cup logo" />
      <h1>{randomWord} World Cup 2026</h1>
      <p>Stay updated on the World Cup events, news and games...</p>
    </header>
  );
}
