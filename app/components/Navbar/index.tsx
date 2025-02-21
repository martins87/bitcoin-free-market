import Container from "../ui/Container";
import Logo from "../Logo";
import UserAccountMenu from "./UserAccountMenu";

const Navbar = () => {
  return (
    <Container className="">
      <div className="w-full flex items-center gap-x-5 sm:gap-8 lg:gap-10 py-8">
        <div className="relative group w-full flex items-center justify-center px-6 py-2 z-20">
          <Logo className="absolute left-6" />
          <UserAccountMenu />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
