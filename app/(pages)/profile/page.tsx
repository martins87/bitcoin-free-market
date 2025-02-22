"use client";

import { useState } from "react";

import Header from "@/app/(pages)/profile/Header";
import Centered from "@/app/components/ui/Centered";
import Container from "@/app/components/ui/Container";
import ContactPage from "./Contacts";
import AdsPage from "./Ads";

export type Page = "ads" | "contacts";

const ProfilePage = () => {
  const [page, setPage] = useState<Page>("ads");

  return (
    <Container className="flex flex-col gap-y-4 mt-2 md:mt-20">
      <Header setPage={setPage} />
      <Centered className="">
        {page === "ads" && <AdsPage />}
        {page === "contacts" && <ContactPage />}
      </Centered>
    </Container>
  );
};

export default ProfilePage;
