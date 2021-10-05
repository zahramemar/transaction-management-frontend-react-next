import useSWR from "swr";
import { Transaction } from "../entities/transaction.entity";
import { fetcher } from "../utils";

export function useTransactions() {
  const { data, error } = useSWR<Transaction[]>("/api/transactions", fetcher);

  return { transactions: data, isLoading: !error && !data, error };
}
