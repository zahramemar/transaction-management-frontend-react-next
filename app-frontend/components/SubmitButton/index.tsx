import styles from "./styles.module.css";

export function SubmitButton() {
  return (
    <input
      type="submit"
      className={styles.button}
      data-type="transaction-submit"
      value="Submit"
    />
  );
}
