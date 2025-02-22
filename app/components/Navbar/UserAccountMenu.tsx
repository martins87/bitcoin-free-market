"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

import Button from "../ui/Button";
import Link from "next/link";
import { BitcoinConnectClientWrapper } from "../BitcoinConnectClientWrapper";

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
    <div className="absolute right-6 flex items-center gap-x-4">
      <BitcoinConnectClientWrapper />
      {isLoggedIn ? (
        <Link href="/profile">
          <Image
            width={56}
            height={56}
            className="rounded-full"
            src={profileImage}
            alt="Profile img"
            // priority
            // unoptimized={typeof profileImage === "string"}
          />
        </Link>
      ) : (
        <Button label="Login" primary onClick={handleClick} />
      )}
    </div>
  );
};

export default UserAccountMenu;
