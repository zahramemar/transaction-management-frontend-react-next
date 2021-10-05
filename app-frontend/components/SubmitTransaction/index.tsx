import { Logo } from "../Logo";
import { Title } from "../Title";
import { Subtitle } from "../Subtitle";
import { Input } from "../Input";
import { SubmitButton } from "../SubmitButton";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createTransaction, getAccount } from "../../api";
import { useSWRConfig } from "swr";

const schema = yup.object().shape({
  amount: yup.number().required(),
  accountId: yup.string().uuid().required(),
});

interface FormData {
  amount: string;
  accountId: string;
}

export function SubmitTransaction() {
  const { mutate } = useSWRConfig();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema) as any,
  });

  const onSubmitHandler = async (data: FormData) => {
    const transaction = await createTransaction(
      parseFloat(data.amount),
      data.accountId
    );

    const account = await getAccount(data.accountId);
    await mutate(
      "/api/transactions",
      (transactions) => [
        { ...transaction, balance: account.balance },
        ...transactions,
      ],
      false
    );
    reset();
  };

  const amount = register("amount");

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
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="mt-8 space-y-12"
        >
          <div>
            <Input
              {...register("accountId")}
              type="text"
              placeholder="Account ID"
              error={errors.accountId?.message}
            />

            <Input
              {...amount}
              type="number"
              placeholder="1000"
              error={errors.amount?.message}
            />
          </div>

          <SubmitButton />
        </form>
      </div>
    </div>
  );
}
