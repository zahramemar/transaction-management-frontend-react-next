import { Title } from "./Title";
import { Transactions } from "./Transactions";

export function TransactionList() {
  return (
    <div className="p-12  bg-gray-50  lg:h-screen flex flex-col">
      <Title>History</Title>

      <div className="lg:overflow-y-auto overflow-x-auto lg:h-full flex-grow">
        <Transactions />
      </div>
    </div>
  );
}
