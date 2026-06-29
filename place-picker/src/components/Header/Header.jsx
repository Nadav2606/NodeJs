import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="/logo.png" alt="styled globe" />
      <h1>Place Picker App</h1>
      <p>Find your favorite places around the world for your next trip</p>
    </header>
  );
}
