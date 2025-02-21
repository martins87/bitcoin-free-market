import { FC } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import BTCSymbol from "../BTCSymbol";
import Link from "next/link";

type TrendingCardProps = {
  userId: string;
  userName: string;
  avatar: StaticImport;
  productImg: StaticImport;
  productTitle: string;
  value: string;
};

const TrendingCard: FC<TrendingCardProps> = ({
  userId,
  userName,
  avatar,
  productImg,
  productTitle,
  value,
}) => {
  return (
    <Link href={"/product/1"}>
      <div className="group flex flex-col gap-y-4 border-2 border-white hover:cursor-pointer hover:border-[#F7931A] rounded-2xl p-4 transition-all duration-500 shadow-xl hover:shadow-lg">
        <div className="flex items-center justify-start gap-4">
          <Image className="w-8 h-8 rounded-full" src={avatar} alt="avatar" />
          <div className="flex flex-col items-center justify-around gap-y-1">
            <span className="font-[family-name:var(--font-sora)] text-base text-black mr-auto -mb-1">
              {userName}
            </span>
            <span className="font-[family-name:var(--font-inter)] text-sm text-black/50 tracking-wide mr-auto -mt-1">
              @{userId}
            </span>
          </div>
        </div>
        <div className="relative flex flex-col gap-y-2">
          <Image
            className="w-72 aspect-square rounded-xl mx-auto"
            src={productImg}
            alt="product"
          />
          <span className="font-[family-name:var(--font-inter)] font-semibold text-base text-black/90">
            {productTitle}
          </span>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="w-fit flex items-center justify-between pl-1 pr-4 py-1 rounded-xl bg-[#F7931A]">
            <BTCSymbol className="w-10 rotate-[-14deg]" />
            <span className="font-[family-name:var(--font-inter)] font-bold text-xl text-white">
              {value}
            </span>
          </div>
          <div className="flex items-center justify-between gap-x-1">
            <span className="font-[family-name:var(--font-inter)] font-normal text-lg text-[#7780A1]/20 group-hover:text-[#F7931A] group-hover:drop-shadow-2xl transition-all duration-500">
              {`See more ->`}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TrendingCard;
