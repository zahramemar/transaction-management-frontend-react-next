import type { NextApiRequest, NextApiResponse } from "next";
import { Transaction } from "../../entities/transaction.entity";

const URL =
  "https://infra.devskills.app/api/transaction-management/transactions";

const getTransactions = (): Promise<Transaction[]> =>
  fetch(URL).then((res) => res.json());

interface TransactionData {
  amount: number;
  account_id: string;
}

async function createTransaction(data: TransactionData) {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "GET") {
    const transactions = await getTransactions();
    response.status(200).json(transactions);
  } else if (request.method === "POST") {
    const transactionData = request.body;
    const result = await createTransaction(transactionData);
    response.status(201).json(result);
  }
}
