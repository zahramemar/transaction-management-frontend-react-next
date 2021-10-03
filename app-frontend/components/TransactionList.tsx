import { Title } from "./Title";
import { Transactions } from "./Transactions";

export function TransactionList() {
  return (
    <div className="p-12 bg-gray-50 space-y-8 lg:h-screen lg:overflow-hidden">
      <Title>History</Title>
      <Transactions />
    </div>
  );
}
