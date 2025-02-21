import { FC } from "react";

import BTCSymbol from "../BTCSymbol";
import Button from "../ui/Button";
import Telegram from "../../assets/icons/telegram-white.png";
import ProductDescription from "./ProductDescription";
import { xbox } from "@/app/data/mock/products";

type ProductMainInfoProps = {
  title: string;
  price: string;
  listingDate: string;
};

const ProductMainInfo: FC<ProductMainInfoProps> = ({
  title,
  price,
  listingDate,
}) => {
  return (
    <div className="w-full h-full flex flex-col gap-y-8">
      <span className="font-[family-name:var(--font-inter)] text-base text-black/30">
        Publish Date: {listingDate}
      </span>
      <span className="font-[family-name:var(--font-sora)] text-5xl font-semibold text-header -mt-6">
        {title}
      </span>
      <div className="flex items-center justify-start gap-x-2">
        <BTCSymbol className="w-10" />
        <span className="font-[family-name:var(--font-inter)] text-3xl font-bold text-button_background tracking-wide">
          {price}
        </span>
      </div>
      <ProductDescription description={xbox.description} />
      <div className="w-full flex gap-x-2">
        <Button className="w-44" label="Telegram" icon={Telegram} primary />
      </div>
    </div>
  );
};

export default ProductMainInfo;
