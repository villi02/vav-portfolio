"use client";
import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";

export const SearchSection: React.FC = () => {
  const search = useSearchParams();
  const [value, setValue] = useState(search ? search.get("q") || "" : "");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/Search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: value }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const data = await response.json();
      setResult(data.results[0]);
      setError(null);
      history.pushState(null, "", `/?q=${encodeURIComponent(value)}`);
      router.refresh();
    } catch (error: any) {
      console.error("Error fetching search results:", error);
      setResult(null);
      setError(error.message);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setResult(null);
    setError(null);
  };

  return (
    <section className="relative py-20 bg-black text-white" id="search">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Search</h2>
        <p className="text-gray-400 text-lg mb-8">
          This is a RAG chatbot, given information about me, give it a try!
        </p>
        <div className="flex flex-col items-center w-full p-3 gap-4 my-3">
          <form
            onSubmit={handleSearch}
            className="flex justify-center w-full max-w-md"
          >
            <div className="relative flex-grow">
              <input
                value={value}
                onChange={handleChange}
                className="w-full px-5 py-2 bg-zinc-900 text-white rounded-full focus:outline-none focus:ring-1 focus:ring-white focus:bg-black placeholder:text-gray-500"
                placeholder="Søk..."
              />
              <IconButton
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                style={{ color: "white" }}
              >
                <SearchIcon />
              </IconButton>
            </div>
          </form>
          <p className="text-gray-400 text-sm mb-8">
            NB! The bot may hallucinate and take some time to answer
          </p>
          {result && (
            <div className="w-full max-w-md p-3 mt-3 bg-zinc-900 text-gray-300 rounded-md">
              {result}
            </div>
          )}
          {error && (
            <div className="w-full max-w-md p-3 mt-3 bg-red-800 text-white rounded-md">
              {error}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
