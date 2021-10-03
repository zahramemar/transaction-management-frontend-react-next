import { Logo } from "../Logo";
import { Title } from "../Title";
import { Subtitle } from "../Subtitle";
import { Input } from "../Input";
import { SubmitButton } from "../SubmitButton";
import { useState } from "react";

export function SubmitTransaction() {
  const [amount, setAmount] = useState(null);
  const [accountId, setAccountId] = useState(null);
  // TODO fix naming
  const call = (amount, accountId) => {
    return fetch("/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: parseFloat(amount),
        account_id: accountId,
      }),
    });
  };

  return (
    <div className="lg:h-screen center bg-gray-50 p-10">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Logo />
          <div className="mt-6">
            <Title>Submit New Transaction</Title>
          </div>
          <div className="mt-2">
            <Subtitle>you need to enter amount and account id</Subtitle>
          </div>
        </div>
        <form className="mt-8 space-y-12">
          <div>
            <Input
              fieldLabel="Account ID"
              fieldType="text"
              placeHolder="Account ID"
              value={accountId}
              onChange={(e) => setAccountId(e.target.value)}
            />

            <Input
              fieldLabel="Amount"
              fieldType="number"
              placeHolder="1000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <SubmitButton
            onClick={(ev) => {
              ev.preventDefault(ev);
              const result = call(amount, accountId).then((res) => {
                setAmount(null);
                setAccountId(null);
              });
            }}
          />
        </form>
      </div>
    </div>
  );
}
