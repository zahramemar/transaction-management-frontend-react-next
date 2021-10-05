import styles from "./styles.module.css";
import classnames from "classnames";

interface TransactionTypeProps {
  amount: number;
}

export const TransactionType = ({ amount }: TransactionTypeProps) => {
  const isDeposit = amount >= 0;
  const className = classnames([
    styles.transactionType,
    isDeposit ? styles.deposit : styles.withdraw,
  ]);
  const label = isDeposit ? "deposit" : "withdraw";

  return <span className={className}>{label}</span>;
};
