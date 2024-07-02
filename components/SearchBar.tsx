"use client";
import { ChangeEvent, useState } from "react";
import { IconButton } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";

export type SearchProps = {
  onSearch: (value: string) => void;
};

export const SearchBar = () => {
  const placeholderValue = "Søk...";
  const search = useSearchParams();
  const [value, setValue] = useState(search ? search.get("q") || "" : "");
  const router = useRouter();

  const searchHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setValue(target.value);
  };

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const encodedValue = encodeURIComponent(value);
      router.push(`/search?q=${encodedValue}`);
    }
  };

  const iconButtonHandleKeyDown = async (event: any) => {
    event.preventDefault();
    const encodedValue = encodeURIComponent(value);
    router.push(`/search?q=${encodedValue}`);
  };

  return (
    <div className="flex p-3 gap-4 my-3 flex-col items-center w-full">
      <form
        onSubmit={iconButtonHandleKeyDown}
        className="flex justify-center w-2/3"
      >
        <div className="relative w-full">
          <input
            value={value || ""}
            onChange={searchHandler}
            className="px-5 py-1 w-2/3 sm:px-5 sm:py-3 w-full text-zinc-200  bg-zinc-800 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:ring-white placeholder:text-zinc-400"
            placeholder={placeholderValue}
          />
          <IconButton
            type="submit"
            onClick={iconButtonHandleKeyDown}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            style={{ color: "white" }}
          >
            <SearchIcon />
          </IconButton>
        </div>
      </form>
    </div>
  );
};