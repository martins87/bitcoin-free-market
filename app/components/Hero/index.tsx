import BTCSymbol from "../BTCSymbol";

const Hero = () => {
  return (
    <div className="w-full h-[30vh] flex flex-col items-center justify-center gap-y-12 -mb-36">
      <div className="flex flex-col -mb-4">
        <div className="w-fit flex items-center justify-around gap-x-4 mx-auto">
          <span className="flex items-center gap-x-2 font-[family-name:var(--font-sora)] text-[80px] text-black/90">
            List goods and services
          </span>
          <BTCSymbol className="w-[72px] animate-spin-till-100-million-usd" />
        </div>
        <div className="w-fit flex items-center justify-around gap-x-4 mx-auto -mt-8">
          <BTCSymbol className="w-[72px] animate-spin-till-100-million-usd" />
          <span className="flex items-center gap-x-2 font-[family-name:var(--font-sora)] text-[80px] text-black/90">
            Trade in satoshis
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
