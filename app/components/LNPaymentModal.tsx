"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, Loader2, XCircle } from "lucide-react";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Typography from "./ui/Typography";
import Button from "./ui/Button";

interface LNPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  invoiceAmount: string;
  onClick: () => void;
}

type PaymentStatus = "idle" | "processing" | "success" | "error";

export default function LNPaymentModal({
  isOpen,
  onClose,
  invoiceAmount,
  onClick,
}: LNPaymentModalProps) {
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>("idle");

  const simulatePayment = async () => {
    setPaymentStatus("processing");

    try {
      // Simulate NWC payment processing
      // await new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     // Randomly succeed or fail for demo
      //     Math.random() > 0.5
      //       ? resolve(true)
      //       : reject(new Error("Payment failed"));
      //   }, 2000);
      // });

      setPaymentStatus("success");
      // Auto close after success
      setTimeout(() => {
        onClose();
        setPaymentStatus("idle");
      }, 2000);
    } catch (error) {
      setPaymentStatus("success");
      console.error(error);
    }

    onClick();
  };

  const statusMessages = {
    idle: "",
    processing: "Waiting confirmation...",
    success: "Payment successfull!",
    error: "Fail :(",
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="">
        <DialogHeader>
          <Typography className="text-3xl">
            Lightning Network Invoice
          </Typography>
          <Typography className="text-lg" font="inter">
            Confirm details and simulate payment of Lightning Network invoice
          </Typography>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Typography className="text-lg" font="inter">
              Invoice value
            </Typography>
            <Input
              id="amount"
              value={invoiceAmount}
              readOnly
              className="bg-muted"
            />
          </div>

          <AnimatePresence mode="wait">
            {paymentStatus !== "idle" && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className={`flex items-center justify-center gap-2 rounded-md p-3 text-sm
                  ${paymentStatus === "processing" && "bg-muted"}
                  ${
                    paymentStatus === "success" &&
                    "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                  }
                  ${
                    paymentStatus === "error" &&
                    "bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                  }
                `}
              >
                {paymentStatus === "processing" && (
                  <Loader2 className="h-4 w-4 animate-spin" />
                )}
                {paymentStatus === "success" && (
                  <CheckCircle className="h-4 w-4" />
                )}
                {paymentStatus === "error" && <XCircle className="h-4 w-4" />}
                {statusMessages[paymentStatus]}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Button
          onClick={simulatePayment}
          // disabled={
          //   paymentStatus === "processing" || paymentStatus === "success"
          // }
          className="w-full"
          label={
            paymentStatus === "processing" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing
              </>
            ) : (
              "Pay invoice"
            )
          }
          primary
        />
      </DialogContent>
    </Dialog>
  );
}
