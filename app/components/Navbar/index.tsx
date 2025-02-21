import Container from "../ui/Container";
import Logo from "../Logo";
import UserAccountMenu from "./UserAccountMenu";
import SearchBar from "../SearchBar";

const Navbar = () => {
  return (
    <Container>
      <div className="w-full min-h-32 flex items-center gap-x-5 sm:gap-8 lg:gap-10 py-8 mb-10 sm:mb-0">
        <div className="relative group w-full flex items-center justify-center px-6 py-2 z-20">
          <Logo className="absolute left-6" />
          <SearchBar />
          <UserAccountMenu />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
