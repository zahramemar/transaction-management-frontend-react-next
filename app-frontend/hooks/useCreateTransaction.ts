import { localTransactions, Transaction } from "../entities";
import { createTransaction, getAccount } from "../api";
import { useSWRConfig } from "swr";
import { useCallback } from "react";

export function useCreateTransaction() {
  const { mutate } = useSWRConfig();
  return useCallback(
    async (accountId: string, amount: number) => {
      // Creating temp transaction to use Optimistic update pattern
      const transactions = await mutate(
        "/api/transactions",
        (transactions) => [
          {
            transaction_id: Math.random() + "",
            account_id: accountId,
            amount: amount,
            created_at: new Date().toISOString(),
            balance: "loading...",
          } as Transaction,
          ...(transactions ?? []),
        ],
        false
      );
      const transaction = await createTransaction(amount, accountId);

      const account = await getAccount(accountId);
      const transactionWithBalance = {
        ...transaction,
        balance: account.balance,
      };

      // Save the transaction in our local state
      // We have to save it before the mutate so that useTransaction can use it
      localTransactions[transactionWithBalance.transaction_id] =
        transactionWithBalance;

      // Update local transactions with balance
      transactions[0] = transactionWithBalance;
      await mutate("/api/transactions", transactions, false);

      // Get the latest transactions
      await mutate("/api/transactions");
    },
    [mutate]
  );
}
