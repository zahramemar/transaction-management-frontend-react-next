export interface Transaction {
  account_id: string;
  amount: number;
  transaction_id: string;
  created_at: string;
  balance?: number;
}

export interface Account {
  account_id: string;
  balance: number;
}
