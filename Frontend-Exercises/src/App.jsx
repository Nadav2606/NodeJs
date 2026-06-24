import { useState } from "react";
import Header from "./components/Header/header";
import Diseases from "./components/Diseases/diseases";
import DiseaseInfo from "./components/DiseaseInfo/diseaseInfo";
import { DISEASES } from "./data";

export default function App() {
  const [selectedDisease, setSelectedDisease] = useState("influenza");

  const diseaseInfo = DISEASES[selectedDisease];

  return (
    <>
      <Header />

      <main>
        <Diseases onSelectDisease={setSelectedDisease} />

        <DiseaseInfo diseaseInfo={diseaseInfo} />
      </main>
    </>
  );
}
