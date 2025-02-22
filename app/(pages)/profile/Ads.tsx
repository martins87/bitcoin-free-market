"use client";

import Ad from "@/app/components/Ad";
import Button from "@/app/components/ui/Button";
import Centered from "@/app/components/ui/Centered";
import BitAxe from "../../assets/images/mock/products/bitaxe-gamma.jpeg";
import NerdMiner from "../../assets/images/mock/products/nerdminer.png";
import { Dispatch, FC, useState } from "react";
import { Page } from "./page";

type AdsPageProps = {
  setPage: Dispatch<React.SetStateAction<Page>>;
};

const AdsPage: FC<AdsPageProps> = ({ setPage }) => {
  const [statusAd2, setStatusAd2] = useState<"active" | "waiting">("waiting");

  return (
    <Centered className="gap-y-4" direction="col">
      <Ad
        title="Bitaxe Gamma, BM1370, 1,2 TH/s"
        price="0.0005"
        img={BitAxe}
        status="active"
      />
      <Ad
        title="NerdMiner3.0 BTC Miner"
        price="0.0005"
        img={NerdMiner}
        status={statusAd2}
        onClick={() => setStatusAd2("active")}
      />
      <Button label="Create ad" onClick={() => setPage("create")} primary />
    </Centered>
  );
};

export default AdsPage;
