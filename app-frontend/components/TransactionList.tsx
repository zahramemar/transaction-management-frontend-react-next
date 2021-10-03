const transactions = [...Array(100).keys()].map(() => ({
  amount: 2,
  account: "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
  type: "deposit",
  id: "123456",
  balance: 0,
}));

export function TransactionList() {
  return (
    <div className="lg:h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 max-h-screen">
      <div className="max-w-md lg:max-w-full w-full space-y-8 lg:space-y-0 flex flex-col h-full">
        <div className="bg-indigo-600 flex-grow-0 h-12">
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center justify-center">
                <p className="ml-3 font-medium text-white truncate">History</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col self-stretch relative overflow-hidden">
          <div className="sm:-mx-6 lg:-mx-8 h-full">
            <div className="py-2 align-middle min-w-full sm:px-6 lg:px-8 h-full">
              <div className="shadow border-b border-gray-200 sm:rounded-lg h-full">
                <table className="min-w-full divide-y divide-gray-200 h-full flex flex-col">
                  <thead className="bg-gray-50 block w-full flex-grow-0">
                    <tr className="table w-full table-fixed">
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Account ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Balance
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 overflow-y-auto block relative self-stretch">
                    <div className="h-full">
                      {transactions.map((person) => (
                        <tr
                          key={person.id}
                          className="table w-full table-fixed"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {person.account}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold bg-green-100 text-green-800">
                              {person.type}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {person.amount}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {person.balance}
                          </td>
                        </tr>
                      ))}
                    </div>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
