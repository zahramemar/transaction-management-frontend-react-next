import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.css";

export const Table: FC<PropsWithChildren<{}>> = ({ children }) => (
  <div className={styles.borderRounded}>
    <table className={styles.table}>{children}</table>
  </div>
);

export const TD: FC<PropsWithChildren<{}>> = ({ children }) => (
  <td className={styles.td}>{children}</td>
);

export const TH: FC<PropsWithChildren<{}>> = ({ children }) => (
  <th className={styles.th}>{children}</th>
);

export const THead: FC<PropsWithChildren<{}>> = ({ children }) => (
  <thead className={styles.thead}>{children}</thead>
);

export const TBody: FC<PropsWithChildren<{}>> = ({ children }) => (
  <tbody className={styles.tbody}>{children}</tbody>
);

export const TR: FC<PropsWithChildren<{}>> = ({ children }) => (
  <tr>{children}</tr>
);
