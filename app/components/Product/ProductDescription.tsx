import { FC } from "react";

type ProductDescriptionProps = {
  description: string;
};

const ProductDescription: FC<ProductDescriptionProps> = ({ description }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <span className="font-[family-name:var(--font-sora)] text-2xl font-bold text-black/80">
        Product Description
      </span>
      <span className="font-[family-name:var(--font-inter)] text-base text-black/70 ml-0.5">
        {description}
      </span>
    </div>
  );
};

export default ProductDescription;
