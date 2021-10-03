import { ReactNode } from "react";

interface SubtitleProps {
  children: ReactNode;
}

export function Subtitle({ children }: SubtitleProps) {
  return <p className="text-center text-sm text-blue-900">{children}</p>;
}
