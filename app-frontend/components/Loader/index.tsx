import styles from "./styles.module.css";
import classnames from "classnames";

export function Loader() {
  return <div className={classnames([styles.loader, "center"])} />;
}
