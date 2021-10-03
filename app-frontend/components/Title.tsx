import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export function Title({ children }: TitleProps) {
  return (
    <h2 className="text-center text-3xl font-extrabold text-gray-900">
      {children}
    </h2>
  );
}
