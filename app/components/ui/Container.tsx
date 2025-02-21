import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "w-[90%] sm:w-[95%] lg:w-[80%] xl:w-[75%] h-full flex flex-col items-center justify-center mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
