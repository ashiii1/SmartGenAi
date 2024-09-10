"use client";
import React, { createContext, useState, ReactNode } from "react";

interface SearchContextProps {
  userSearchInput: string;
  setUserSearchInput: (value: string) => void;
}

export const SearchContext = createContext<SearchContextProps>({
  userSearchInput: "",
  setUserSearchInput: () => {},
});

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [userSearchInput, setUserSearchInput] = useState<string>("");

  return (
    <SearchContext.Provider value={{ userSearchInput, setUserSearchInput }}>
      {children}
    </SearchContext.Provider>
  );
};
