import Ad from "@/app/components/Ad";
import Button from "@/app/components/ui/Button";
import Centered from "@/app/components/ui/Centered";
import BitAxe from "../../assets/images/mock/products/bitaxe-gamma.jpeg";
import NerdMiner from "../../assets/images/mock/products/nerdminer.png";

const AdsPage = () => {
  return (
    <Centered className="gap-y-4" direction="col">
      <Ad title="Bitaxe Gamma, BM1370, 1,2 TH/s" price="0.0005" img={BitAxe} />
      <Ad title="NerdMiner3.0 BTC Miner" price="0.0005" img={NerdMiner} />
      <Button label="Create ad" primary />
    </Centered>
  );
};

export default AdsPage;
