"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

import Button from "../ui/Button";
import Person from "../../assets/icons/person.svg";
// import UserPicture from "../../assets/images/ross-ulbricht.png";

const UserAccountMenu: FC = () => {
  const { data: session, status } = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState<string>(
    "https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
  );

  useEffect(() => setIsLoggedIn(status === "authenticated"), [status]);

  useEffect(() => {
    if (session) {
      console.log(session);
      const image = session.user?.image;
      setProfileImage(image!);
    }
  }, [session]);

  const handleClick = () => redirect("/api/auth/signin/");

  return (
    <div className={twMerge("absolute right-6")}>
      {isLoggedIn ? (
        <Image
          width={56}
          height={56}
          className="rounded-full"
          src={profileImage}
          alt="Profile img"
          // priority
          // unoptimized={typeof profileImage === "string"}
        />
      ) : (
        <Button label="Login" icon={Person} primary onClick={handleClick} />
      )}
    </div>
  );
};

export default UserAccountMenu;
