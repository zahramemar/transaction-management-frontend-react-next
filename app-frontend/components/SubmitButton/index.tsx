import styles from "./styles.module.css";

// TODO add type for props
export function SubmitButton({ onClick }) {
  return (
    <button onClick={onClick} type="submit" className={styles.button}>
      Submit
    </button>
  );
}
