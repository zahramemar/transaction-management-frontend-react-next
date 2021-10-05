import { Account, Transaction } from "./entities";

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

export async function getAccount(accountId: string): Promise<Account> {
  const response = await fetch(`/api/account?accountId=${accountId}`);
  return response.json();
}
