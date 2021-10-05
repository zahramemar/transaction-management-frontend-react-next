import useSWR from "swr";
import { Transaction } from "../entities";
import { fetcher } from "../utils";
import { compareAsc } from "date-fns/fp";

function compareTransaction(a: Transaction, b: Transaction) {
  return compareAsc(new Date(a.created_at), new Date(b.created_at));
}

export function useTransactions() {
  const { data, error } = useSWR<Transaction[]>("/api/transactions", fetcher, {
    refreshInterval: 2000,
  });

  const transactions = data?.sort(compareTransaction);

  return {
    transactions,
    isLoading: !error && !data,
    error,
  };
}
