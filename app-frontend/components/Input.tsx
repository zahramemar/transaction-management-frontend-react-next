interface InputProps {
  fieldLabel: string;
  fieldType: string;
  placeHolder: string;
  value: string;
  onChange: any; // TODO fix type
}

export function Input({
  fieldLabel,
  fieldType,
  placeHolder,
  value,
  onChange,
}: InputProps) {
  return (
    <div className="pt-5">
      <label htmlFor={fieldLabel} className="p-1 text-gray-500">
        {fieldLabel}
      </label>
      <input
        name={fieldLabel}
        type={fieldType}
        required
        className="appearance-none w-full mt-1 px-3 py-2 border-2 border-gray-400 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
