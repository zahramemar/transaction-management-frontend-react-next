import useSWR from "swr";
import { localTransactions, Transaction } from "../entities";
import { fetcher } from "../utils";
import { compareAsc } from "date-fns/fp";

function compareTransaction(a: Transaction, b: Transaction) {
  return compareAsc(new Date(a.created_at), new Date(b.created_at));
}

export function useTransactions() {
  const { data, error } = useSWR<Transaction[]>("/api/transactions", fetcher, {
    refreshInterval: 2000,
  });

  const transactions = data?.sort(compareTransaction).map((transaction) =>
    // Here we checked that if we had this transaction before we use our own data
    // in order to not loose the balance on each fetch
    transaction.transaction_id in localTransactions
      ? localTransactions[transaction.transaction_id]
      : transaction
  );

  return {
    transactions,
    isLoading: !error && !data,
    error,
  };
}
