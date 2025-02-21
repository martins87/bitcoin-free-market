import Container from "../ui/Container";
import Logo from "../Logo";
import Button from "../ui/Button";

const Footer = () => {
  return (
    <Container>
      <footer className="relative w-full h-[100px] mt-40 mb-10 flex items-center justify-center border border-searchbar_border rounded-3xl">
        <div className="absolute left-6">
          <Logo />
        </div>
        <span className="hidden md:flex font-[family-name:var(--font-inter)] text-sm text-black/50">
          Bitcoin is better than gold.
        </span>
        <div className="absolute right-6 flex gap-x-6">
          <Button label="Create an ad" primary />
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
