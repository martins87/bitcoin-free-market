import * as React from "react";
import { twMerge } from "tailwind-merge";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={twMerge(
        "flex min-h-[80px] w-full rounded-md border border-input px-3 py-2 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 font-[family-name:var(--font-inter)] text-black/80",
        className
      )}
      ref={ref}
      {...props}
      value={props.value}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
