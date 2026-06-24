import Header from "./components/Header/header.jsx";
import Players from "./components/Players/Player.jsx";
import PlayersDetails from "./components/PlayersDetailes/PlayersDetails.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Players />
        <PlayersDetails />
      </main>
    </>
  );
}
