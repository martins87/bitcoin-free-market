import { FC } from "react";
import Image from "next/image";

import ChevronLeft from "../../assets/icons/chevron-left.svg";
import ChevronRight from "../../assets/icons/chevron-right.svg";

type ProductCarouselArrowProps = {
  direction: "left" | "right";
  onClickFn: (i: number) => void;
};

const ProductCarouselArrow: FC<ProductCarouselArrowProps> = ({
  direction,
  onClickFn,
}) => {
  return (
    <Image
      className="hover:cursor-pointer hover:scale-125 transition-all duration-300"
      src={direction === "left" ? ChevronLeft : ChevronRight}
      alt="arrow"
      onClick={() => onClickFn(direction === "left" ? -1 : 1)}
    />
  );
};

export default ProductCarouselArrow;
