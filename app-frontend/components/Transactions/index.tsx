const transactions = [...Array(500).keys()].map(() => ({
  amount: 2,
  account: "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
  type: "deposit",
  id: "123456",
  balance: 0,
}));

export function Transactions() {
  return (
    <div className="lg:overflow-y-auto lg:h-full">
      {transactions.map((transaction) => (
        <div key={transaction.id}>{transaction.amount}</div>
      ))}
    </div>
  );
}
