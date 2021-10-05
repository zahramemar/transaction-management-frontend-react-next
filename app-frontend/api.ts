import { Transaction } from "./entities/transaction.entity";

export async function createTransaction(
  amount: number,
  accountId: string
): Promise<Transaction> {
  const response = await fetch("/api/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: amount,
      account_id: accountId,
    }),
  });
  return response.json();
}
