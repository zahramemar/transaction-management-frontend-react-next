import { NextApiRequest, NextApiResponse } from "next";
import { Account } from "../../entities";

const URL = "https://infra.devskills.app/api/transaction-management/accounts/";

const getAccount = (id: string): Promise<Account[]> =>
  fetch(URL + id).then((res) => res.json());

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const accountId = request.query["accountId"];

  if (!accountId || typeof accountId !== "string") {
    response.status(404).send("");
    return;
  }

  const account = await getAccount(accountId);
  response.status(200).json(account);
}
