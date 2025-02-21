"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { twMerge } from "tailwind-merge";

import ProductCarouselArrow from "./ProductCarouselArrow";

type ProductImagesProps = {
  images: StaticImport[];
};

const ProductImages: FC<ProductImagesProps> = ({ images }) => {
  const [imgIndex, setImgIndex] = useState<number>(0);

  const handleClick = (i: number) => setImgIndex(i);

  const handleChangeImage = (i: number) =>
    setImgIndex((imgIndex + i + images.length) % images.length);

  return (
    <div className="w-full flex flex-col justify-center gap-y-4">
      <div className="w-full overflow-hidden mx-auto">
        <Image
          className="w-full aspect-square rounded-2xl"
          src={images[imgIndex]}
          alt="xbox controller"
        />
      </div>
      <div className="flex items-center justify-center gap-x-4 text-center">
        <ProductCarouselArrow direction="left" onClickFn={handleChangeImage} />
        {images.map((productImg: StaticImport, index: number) => (
          <Image
            key={index}
            className={twMerge(
              "w-[20%] aspect-square rounded-2xl border-2 hover:border-button_background hover:shadow-lg hover:cursor-pointer transition-all duration-300",
              index === imgIndex ? "border-button_background" : "border-white"
            )}
            src={productImg}
            alt="xbox controller"
            onClick={() => handleClick(index)}
          />
        ))}
        <ProductCarouselArrow direction="right" onClickFn={handleChangeImage} />
      </div>
    </div>
  );
};

export default ProductImages;
