import { TransactionList } from "../components/TransactionList";
import { SubmitTransaction } from "../components/SubmitTransaction";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="col-span-12 lg:col-span-4">
        <SubmitTransaction />
      </div>
      <div className="col-span-12 lg:col-span-8">
        <TransactionList />
      </div>
    </Layout>
  );
}
