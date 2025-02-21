"use client";

import { ChangeEvent, FC, useRef, useState } from "react";
import Image from "next/image";

import Search from "../../assets/icons/search.svg";

const SearchBar: FC = () => {
  const inputref = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const search: string = e.target?.value;
    setSearchTerm(search);
  };

  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // search action here
    }
  };

  return (
    <div className="w-[45%] tablet:w-[35%] mx-auto hidden sm:flex items-center gap-x-4 px-5 py-[10px] border border-[#7780A1] rounded-xl text-[#343333]/80 bg-inherit">
      <Image
        className="hover:cursor-pointer"
        src={Search}
        alt="navbar search icon"
      />
      <input
        className="w-3/5 h-1/2 flex flex-1 outline-none font-[family-name:var(--font-inter)] text-lg text-[#343333]/80 placeholder:[#343333] transition-all duration-500"
        type="text"
        ref={inputref}
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleEnterKey}
        placeholder="Products, services, events..."
      />
    </div>
  );
};

export default SearchBar;
