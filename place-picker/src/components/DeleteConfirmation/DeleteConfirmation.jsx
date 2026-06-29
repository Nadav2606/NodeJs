import styles from "./DeleteConfirmation.module.css";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  return (
    <div className={styles.deleteConfirmation}>
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>

      <div className={styles.ConfirmationActions}>
        <button className={styles.red} onClick={onCancel}>
          No👎
        </button>
        <button className={styles.green} onClick={onConfirm}>
          Yes👍
        </button>
      </div>
    </div>
  );
}
