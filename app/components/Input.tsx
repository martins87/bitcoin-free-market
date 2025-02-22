import * as React from "react";
import { twMerge } from "tailwind-merge";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={twMerge(
          "flex h-10 w-full border-input px-4 py-6 placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-[#FFFFFF] [box-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] focus:[box-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[15px] font-[family-name:var(--font-inter)] text-black/80",
          // "flex h-10 w-full border-input px-4 py-6 placeholder:text-base focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-[#FFFFFF] border border-black/20 rounded-[15px] font-[family-name:var(--font-inter)] text-black/80",
          className
        )}
        ref={ref}
        {...props}
        value={props.value}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
