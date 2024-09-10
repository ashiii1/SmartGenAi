"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  FileClock,
  Home,
  Settings,
  WalletCards,
  ChevronLeft,
  Search,
} from "lucide-react";
import { usePathname } from "next/navigation";
import UsageTrack from "./UsageTrack";
import { Button } from "@/components/ui/button";

function SideNav({
  toggleSideNav,
  isSideNavOpen,
}: {
  toggleSideNav: () => void;
  isSideNavOpen: boolean;
}) {
  const MenuList = [
    { name: "Home", icon: Home, link: "/dashboard" },
    { name: "Search", icon: Search, link: "/dashboard/search" },
    { name: "History", icon: FileClock, link: "/dashboard/history" },
    { name: "Billing", icon: WalletCards, link: "/dashboard/billing" },
    { name: "Settings", icon: Settings, link: "/dashboard/settings" },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="h-screen relative p-5 shadow-sm bg-white dark:bg-gray-800 border z-50">
      <div className="flex justify-center border-b">
        <Image src="/logo.svg" width={120} height={100} alt="logo" />
      </div>
      <div className="mt-10">
        {MenuList.map((item, index) => (
          <a href={item.link} key={index}>
            <div
              className={`flex items-center space-x-2 p-2 my-4 rounded-lg hover:bg-slate-400 dark:hover:bg-slate-700 hover:text-white cursor-pointer ${
                path === item.link ? "bg-gray-700 dark:bg-slate-500 text-white " : ""
              }`}
            >
              <item.icon size={20} />
              {item.name}
            </div>
          </a>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full ">
        <UsageTrack />
      </div>
      {isSideNavOpen && (
        <Button
          onClick={toggleSideNav}
          className="absolute -right-10 md:hidden p-2 rounded-full bg-gray-200 hover:bg-gray-300 border border-gray-300 "
        >
          <ChevronLeft size={20} />
        </Button>
      )}
    </div>
  );
}

export default SideNav;
