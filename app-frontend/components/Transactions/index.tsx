import { Table, TBody, TD, TH, THead, TR } from "../Table";
import { TransactionType } from "../TransactionType";
import { useTransactions } from "../../hooks/useTransacion";
import { Loader } from "../Loader";

export function Transactions() {
  const { transactions, isLoading, error } = useTransactions();

  // TODO fix the design for this if I had time
  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <div className={"center"}>
        <Loader />
      </div>
    );

  return (
    <Table>
      <THead>
        <TR>
          <TH>Account ID</TH>
          <TH>Type</TH>
          <TH>Amount</TH>
          <TH>Balance</TH>
        </TR>
      </THead>

      <TBody>
        {transactions.map((transaction) => (
          <TR
            data-type="transaction"
            data-account-id={transaction.account_id}
            data-amount={transaction.amount}
            data-balance={transaction.balance}
            key={transaction.transaction_id}
          >
            <TD>{transaction.account_id}</TD>
            <TD>
              <TransactionType amount={transaction.amount} />
            </TD>
            <TD>{transaction.amount}</TD>
            {/*TODO think about this*/}
            <TD>{transaction.balance ?? "-"}</TD>
          </TR>
        ))}
      </TBody>
    </Table>
  );
}
