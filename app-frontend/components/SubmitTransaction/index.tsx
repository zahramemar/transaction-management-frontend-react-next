import { Input } from "../Input";
import { SubmitButton } from "../SubmitButton";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHeader } from "./SubmitHeader";
import { useCreateTransaction } from "../../hooks/useCreateTransaction";

const schema = yup.object().shape({
  amount: yup
    .number()
    .typeError("Amount must be a number")
    .required("Amount must be filled"),
  accountId: yup.string().required("Account ID must be filled").uuid(),
});

interface FormData {
  amount: string;
  accountId: string;
}

export function SubmitTransaction() {
  const createTransaction = useCreateTransaction();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema) as any,
  });

  const onSubmitHandler = async (data: FormData) => {
    reset();
    await createTransaction(data.accountId, parseFloat(data.amount));
  };

  return (
    <div className="lg:h-screen center bg-gray-50 p-10">
      <div className="max-w-md w-full space-y-8">
        <SubmitHeader />
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="mt-8 space-y-12"
        >
          <div>
            <Input
              {...register("accountId")}
              type="text"
              label="Account ID"
              placeholder="Account ID"
              data-type="account-id"
              error={errors.accountId?.message}
            />

            <Input
              {...register("amount")}
              type="number"
              label="Amount"
              placeholder="1000"
              data-type="amount"
              error={errors.amount?.message}
            />
          </div>

          <SubmitButton />
        </form>
      </div>
    </div>
  );
}
