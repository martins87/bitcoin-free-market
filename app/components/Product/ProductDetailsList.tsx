import { FC } from "react";
import Image from "next/image";

import Check from "../../assets/icons/check-icon.svg";

type ProductDetailsListProps = {
  title: string;
  list: string[];
};

const ProductDetailsList: FC<ProductDetailsListProps> = ({ title, list }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <span className="font-[family-name:var(--font-sora)] text-2xl font-bold text-header">
        {title}
      </span>
      <ul className="flex flex-col gap-y-4 font-[family-name:var(--font-inter)] text-base text-black/70 ml-0.5">
        {list.map((detail: string, index: number) => (
          <li key={index} className="flex items-center gap-x-4">
            <Image src={Check} alt="check icon" />
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetailsList;
