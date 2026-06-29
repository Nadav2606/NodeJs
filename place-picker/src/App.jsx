import { useEffect, useRef, useState } from "react";
import { AVAILABLE_PLACES } from "./data";
import Header from "./components/Header/Header";
import Places from "./components/Places/Places";
import Modal from "./components/Modal/Modal";
import DeleteConfirmation from "./components/DeleteConfirmation/DeleteConfirmation";

const storedIds = JSON.parse(localStorage.getItem("selectedPlace")) || [];

const storedPlaces = storedIds
  .map((id) => AVAILABLE_PLACES.find((place) => place.id === id))
  .filter(Boolean);

export default function App() {
  const selectedPlace = useRef();

  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Latitude:", position.coords.latitude);
        console.log("Longitude:", position.coords.longitude);
      },
      (error) => {
        console.log("Location error:", error);
      },
    );
  }, []);

  function handlePickedPlace(id) {
    setPickedPlaces((prevPlaces) => {
      if (prevPlaces.some((place) => place.id === id)) {
        return prevPlaces;
      }

      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPlaces];
    });

    const storedIds = JSON.parse(localStorage.getItem("selectedPlace")) || [];

    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem("selectedPlace", JSON.stringify([id, ...storedIds]));
    }
  }

  function handleStartRemovePlace(id) {
    setIsModalOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setIsModalOpen(false);
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) => {
      return prevPickedPlaces.filter(
        (place) => place.id !== selectedPlace.current,
      );
    });

    setIsModalOpen(false);

    const storedIds = JSON.parse(localStorage.getItem("selectedPlace")) || [];

    localStorage.setItem(
      "selectedPlace",
      JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current)),
    );
  }

  const availablePlaces = AVAILABLE_PLACES.filter(
    (place) => !pickedPlaces.some((pickedPlace) => pickedPlace.id === place.id),
  );

  return (
    <>
      <Header />

      <Modal open={isModalOpen}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <Places
        title="Picked places"
        places={pickedPlaces}
        fallbackText="Select your next place for vacation"
        onSelectPlace={handleStartRemovePlace}
      />

      <Places
        title="Available Places"
        places={availablePlaces}
        fallbackText="No more places Available"
        onSelectPlace={handlePickedPlace}
      />
    </>
  );
}
