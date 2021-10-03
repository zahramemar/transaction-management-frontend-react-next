interface InputProps {
  fieldLabel: string;
  fieldType: string;
  placeHolder: string;
}

export function Input({ fieldLabel, fieldType, placeHolder }: InputProps) {
  return (
    <div className="pt-5">
      <label htmlFor={fieldLabel} className="p-1 text-gray-500">
        {fieldLabel}
      </label>
      <input
        name={fieldLabel}
        type={fieldType}
        required
        className="appearance-none rounded-none relative block w-full mt-1 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder={placeHolder}
      />
    </div>
  );
}
