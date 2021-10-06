export interface Transaction {
  account_id: string;
  amount: number;
  transaction_id: string;
  created_at: string;
  balance?: number | string;
}

export interface Account {
  account_id: string;
  balance: number;
}

// We need to keep the list of transactions we have created to be able to show the balance for them
export const localTransactions: Record<string, Transaction> = {};
