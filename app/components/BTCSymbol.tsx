import { FC } from "react";
import Image from "next/image";

import BTCSymbolIcon from "../assets/icons/bitcoin-logo.svg";

type BTCSymbolProps = {
  className?: string;
};

const BTCSymbol: FC<BTCSymbolProps> = ({ className }) => {
  return <Image className={className} src={BTCSymbolIcon} alt="btc symbol" />;
};

export default BTCSymbol;
