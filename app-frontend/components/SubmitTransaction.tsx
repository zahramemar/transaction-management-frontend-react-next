import { Logo } from "./Logo";
import { Title } from "./Title";
import { Subtitle } from "./Subtitle";

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
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="accountId" className="p-1 text-gray-500">
                Account ID
              </label>
              <input
                name={"accountId"}
                type="text"
                required
                className="appearance-none rounded-none relative block w-full mt-1 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="123ddfd-ffvdcc"
              />
            </div>
            <div className="pt-5">
              <label htmlFor="amount" className="p-1 text-gray-500">
                Amount
              </label>
              <input
                name="amount"
                type="number"
                required
                className="appearance-none rounded-none relative block w-full mt-1 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="1000"
              />
            </div>
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
