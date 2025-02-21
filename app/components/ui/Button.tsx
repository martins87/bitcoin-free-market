import { FC } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  label: string;
  primary?: boolean;
  secondary?: boolean;
  className?: string;
  icon?: StaticImport;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({
  label,
  primary,
  secondary,
  className,
  icon,
  onClick,
}) => {
  return (
    <button
      className={twMerge(
        "group flex items-center justify-center gap-x-3 px-5 py-3 rounded-2xl transition-all duration-300",
        primary
          ? "bg-[#F7931A] hover:bg-[#F7931A]/80"
          : secondary
          ? "bg-white border-2 border-[#F7931A] hover:bg-[#F7931A]/10"
          : "",
        className
      )}
      onClick={onClick}
    >
      {icon && <Image width={32} height={32} src={icon} alt="button icon" />}
      <span
        className={twMerge(
          "font-[family-name:var(--font-sora)] text-base font-semibold tracking-wide",
          primary ? "text-white" : secondary ? "text-[#F7931A]" : ""
        )}
      >
        {label}
      </span>
    </button>
  );
};

export default Button;
