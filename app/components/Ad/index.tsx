import { FC, useState } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
import LNPaymentModal from "../LNPaymentModal";
import { twMerge } from "tailwind-merge";
import Button from "../ui/Button";

type AdProps = {
  img: StaticImport;
  title: string;
  price: string;
  status: "active" | "waiting";
};

const Ad: FC<AdProps> = ({ img, title, price, status }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Example invoice data
  const invoiceData = {
    amount: "0.00001 BTC",
  };

  return (
    <>
      <Centered className="gap-x-6 border-[1px] border-[solid] border-[#E1E2FF] rounded-[16px] p-4">
        <Centered className="max-w-48 h-60 overflow-hidden rounded-xl">
          <Image className="h-full object-cover" src={img} alt="Bitaxe Gamma" />
        </Centered>
        <Centered
          className="w-full h-60"
          items="start"
          justify="start"
          direction="col"
        >
          <Typography className="text-2xl" weight="400">
            {title}
          </Typography>
          <Typography
            className="text-xl text-main_orange"
            font="inter"
            weight="600"
          >
            BTC {price}
          </Typography>
        </Centered>
        <Centered
          className="w-1/5 h-60 justify-between"
          items="end"
          direction="col"
        >
          <Typography
            className={twMerge(
              status === "active" ? "text-green-700" : "text-orange-500"
            )}
          >
            {status === "active" ? "Active" : "Waiting payment..."}
          </Typography>
          {status === "waiting" && (
            <Button
              label="Pay"
              onClick={() => setIsModalOpen(true)}
              secondary
            />
          )}
        </Centered>
      </Centered>
      <LNPaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        invoiceAmount={invoiceData.amount}
      />
    </>
  );
};

export default Ad;
