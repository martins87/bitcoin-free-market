import { FC } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type TabProps = {
  label: string;
  icon: StaticImport;
  onClick?: () => void;
  className?: string;
};

const Tab: FC<TabProps> = ({ label, icon, onClick, className }) => {
  return (
    <div
      className={twMerge(
        "flex items-center gap-4 p-2 hover:cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <Image
        className="text-gray-500 rounded-sm"
        src={icon}
        alt="sidebar icon"
        width={24}
      />
      <span className="text-3xl leading-4 font-[family-name:var(--font-sora)] text-black/80">
        {label}
      </span>
    </div>
  );
};

export default Tab;
