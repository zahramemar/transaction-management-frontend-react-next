import { Logo } from "./Logo";
import { Title } from "./Title";
import { Subtitle } from "./Subtitle";
import { Input } from "./Input";
import { SubmitButton } from "./SubmitButton";

export function SubmitTransaction() {
  return (
    <div className="lg:h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
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
            />

            <Input fieldLabel="Amount" fieldType="number" placeHolder="1000" />
          </div>

          <SubmitButton />
        </form>
      </div>
    </div>
  );
}
