import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  type: string;
  error?: string;
  label: string;
}

const InputComponent = (
  { name, type, error, label, ...rest }: InputProps,
  ref
) => (
  <div className="pt-5">
    <label htmlFor={name} className="p-1 text-gray-500">
      {label}
    </label>
    <input
      ref={ref}
      name={name}
      type={type}
      className="appearance-none w-full mt-1 px-3 py-2 border-2 border-gray-400 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      {...rest}
    />
    {error && <p className="pt-1 text-red-600 text-xs">{error}</p>}
  </div>
);
InputComponent.displayName = "Input";

export const Input = forwardRef(InputComponent);
