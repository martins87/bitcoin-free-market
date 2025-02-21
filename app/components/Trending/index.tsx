import { FC } from "react";

import TrendingCard from "./TrendingCard";
import { Product } from "../../types/Product";

type TrendingProps = {
  title: string;
  listing: Product[];
};

const Trending: FC<TrendingProps> = ({ title, listing }) => {
  return (
    <div className="w-full flex flex-col gap-y-6">
      <span className="font-[family-name:var(--font-sora)] text-[40px] text-header bg-white">
        {title}
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {listing.map((item, index) => (
          <TrendingCard
            key={index}
            userId={item.userId}
            userName={item.userName}
            avatar={item.avatar}
            productImg={item.productImg}
            productTitle={item.productTitle}
            value={item.value}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;
