import styles from "./styles.module.css";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return <div className={styles.layout}>{children}</div>;
}
