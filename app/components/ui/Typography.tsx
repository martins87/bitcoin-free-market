import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TypographyProps = {
  className?: string;
  font?: "sora" | "inter";
  weight?: "300" | "400" | "500" | "600" | "700" | "800";
  children: string | ReactNode;
  maxChar?: number;
  onClick?: () => void;
};

const Typography: FC<TypographyProps> = ({
  className,
  font = "sora",
  weight = "400",
  children,
  maxChar,
  onClick,
}) => {
  return (
    <span
      className={twMerge(
        "text-black",
        font === "sora"
          ? "font-[family-name:var(--font-sora)]"
          : "font-[family-name:var(--font-inter)]",
        weight === "300"
          ? "font-light"
          : weight === "400"
          ? "font-normal"
          : weight === "500"
          ? "font-medium"
          : weight === "600"
          ? "font-semibold"
          : weight === "700"
          ? "font-bold"
          : weight === "800"
          ? "font-extrabold"
          : weight,
        className
      )}
      onClick={onClick}
    >
      {maxChar
        ? children!.toString().length > maxChar
          ? `${children!.toString().slice(0, maxChar)}...`
          : children!.toString()
        : children}
    </span>
  );
};

export default Typography;
