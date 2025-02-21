import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import BFMLogo from "../assets/icons/logo.png";

type LogoProps = {
  onClick?: () => void;
  className?: string;
};

const Logo: FC<LogoProps> = ({ onClick, className }) => {
  return (
    <div className={className} onClick={onClick}>
      <Link className="flex flex-col items-center" href="/">
        <Image
          className="w-16 aspect-square"
          src={BFMLogo}
          alt="bitcoin free market icon"
        />
      </Link>
    </div>
  );
};

export default Logo;
