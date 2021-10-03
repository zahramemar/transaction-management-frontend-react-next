import { Logo } from "./Logo";
import { Title } from "./Title";
import { Subtitle } from "./Subtitle";
import { Input } from "./Input";

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

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
