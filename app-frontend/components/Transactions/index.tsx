import { Table, TBody, TD, TH, THead, TR } from "../Table";

const transactions = [...Array(500).keys()].map(() => ({
  amount: 2,
  account: "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
  type: "deposit",
  id: "123456",
  balance: 0,
}));

export function Transactions() {
  return (
    <Table>
      <THead>
        <TR>
          <TH>Account ID</TH>
          <TH>Type</TH>
          <TH>Amount</TH>
          <TH>Balance</TH>
        </TR>
      </THead>

      <TBody>
        {transactions.map((transaction) => (
          <TR key={transaction.id}>
            <TD>{transaction.account}</TD>
            <TD>
              {/*<span className="p-1 text-xs leading-5 bg-green-100 text-green-800">*/}
              {/*  {transaction.type}*/}
              {/*</span>*/}
              <span className="p-1 text-xs font-semibold font-mono rounded-sm bg-red-100 text-red-600">
                {transaction.type}
              </span>
            </TD>
            <TD>{transaction.amount}</TD>
            <TD>{transaction.balance}</TD>
          </TR>
        ))}
      </TBody>
    </Table>
  );
}
