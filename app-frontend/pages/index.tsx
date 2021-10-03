import { TransactionList } from "../components/TransactionList";
import { SubmitTransaction } from "../components/SubmitTransaction";

export default function Home() {
  return (
    <div className={"flex flex-col lg:flex-row"}>
      <SubmitTransaction />
      <TransactionList />
    </div>
  );
}
