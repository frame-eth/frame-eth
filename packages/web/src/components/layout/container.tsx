import cx from "classnames";
import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
  className?: string;
}

const Container: FC<Props> = ({ children, className }) => {
  return <div className={twMerge(cx("mx-auto max-w-7xl px-4 sm:px-6", className))}>{children}</div>;
};

export default Container;
