import { Dispatch, FC } from "react";

import Tab from "@/app/(pages)/profile/Tab";
import { Page } from "@/app/(pages)/profile/page";
import Centered from "../../components/ui/Centered";
import Speaker from "../../assets/icons/speaker.svg";
import Telephone from "../../assets/icons/telephone.svg";

type HeaderProps = {
  setPage: Dispatch<React.SetStateAction<Page>>;
};

const Header: FC<HeaderProps> = ({ setPage }) => {
  return (
    <Centered className="flex gap-x-8 p-4 items-start justify-start">
      <Tab label="My ads" icon={Speaker} onClick={() => setPage("ads")} />
      <Tab
        label="Contact"
        icon={Telephone}
        onClick={() => setPage("contacts")}
      />
    </Centered>
  );
};

export default Header;
