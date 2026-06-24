import Button from "../Button/Button.jsx";
import { DISEASES } from "../../data";

export default function Diseases({ onSelectDisease }) {
  return (
    <section className="buttons-container">
      {Object.keys(DISEASES).map((key) => (
        <Button key={key} onClick={() => onSelectDisease(key)}>
          {DISEASES[key].title}
        </Button>
      ))}
    </section>
  );
}
