import type { NextApiRequest, NextApiResponse } from "next";
import { Transaction } from "../../entities";

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
  return {
    result: await response.json(),
    status: response.status,
  };
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
    const { result, status } = await createTransaction(transactionData);
    response.status(status).json(result);
  }
}
