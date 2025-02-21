import BTCSymbol from "../BTCSymbol";

const Hero = () => {
  return (
    <div className="w-full h-[30vh] flex flex-col items-center justify-center gap-y-12 -mb-28">
      <div className="flex flex-col">
        <div className="w-fit flex items-center justify-around gap-x-4 mx-auto">
          <span className="flex items-center gap-x-2 font-[family-name:var(--font-sora)] text-5xl tablet:text-6xl 2xl:text-[80px] text-black/80">
            List goods and services
          </span>
          <BTCSymbol className="w-10 tablet:w-[64px] animate-spin-till-100-million-usd" />
        </div>
        <div className="w-fit flex items-center justify-around gap-x-4 mx-auto mt-2">
          <BTCSymbol className="w-10 tablet:w-[64px] animate-spin-till-100-million-usd" />
          <span className="flex items-center gap-x-2 font-[family-name:var(--font-sora)] text-5xl tablet:text-6xl 2xl:text-[80px] text-black/80">
            Trade in satoshis
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
