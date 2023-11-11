import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  title?: string;
}

const Logo: FC<Props> = ({ title }) => {
  return (
    <Link href={"/"} className="flex items-center gap-4">
      <Image src="/logo.svg" alt="header-logo" width="40" height="40" />
      {title && <h1 className="font-bold">{title}</h1>}
    </Link>
  );
};

export default Logo;
