import { ReactNode } from "react";

export interface PageProps {
  children: ReactNode | Array<ReactNode>;
  className?: string;
}

export const Page = ({ children, className }: PageProps) => {
  return <div className={className}>{children}</div>;
};
