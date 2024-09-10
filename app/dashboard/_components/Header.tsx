"use client";
import React, { useContext } from "react";
import { UserButton } from "@clerk/nextjs";
import { Search, Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SearchContext } from "@/app/(context)/SearchContext";
import { ModeToggle } from "@/components/ui/mode-toggle";

function Header({ toggleSideNav }: { toggleSideNav: () => void }) {
  const pathname = usePathname();
  const router = useRouter();
  const { userSearchInput, setUserSearchInput } = useContext(SearchContext);
  const isSettingsPage = pathname === "/dashboard/settings";

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setUserSearchInput(value);
    if (value) {
      router.push("/dashboard/search");
    }
  };

  return (
    <div className="p-5 shadow-sm bg-white dark:bg-gray-800 border-b-2 flex justify-between items-center z-20">
      {isSettingsPage ? (
        <a href="/dashboard">
          <Image src="/logo.svg" width={40} height={40} alt="logo" />
        </a>
      ) : (
        <Button
          className="border dark:border-gray-500 bg-white hover:text-gray-50 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-500"
          onClick={toggleSideNav}
        >
          <Menu size={24} className="text-gray-800 hover:text-gray-50 dark:text-gray-50" />
        </Button>
      )}

      <div className="hidden sm:block align-middle text-3xl relative font-bold">
        <a href="/dashboard">VOOM</a>
      </div>
      <div className="flex gap-2 items-center p-2 border dark:border-gray-500 rounded-md max-w-lg">
        <Search size={20} />
        <input
          type="text"
          placeholder="Search in VOOM"
          className="outline-none bg-transparent text-black dark:text-white"
          value={userSearchInput}
          onChange={handleSearchInputChange}
        />
      </div>
      <div>
        <ModeToggle />
      </div>

      <div className="flex gap-5 items-center">
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
