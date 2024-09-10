"use client";

import React, { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import { useTheme } from "next-themes";

export default function Loading() {
  const { theme } = useTheme();
  const [loaderColor, setLoaderColor] = useState("#000000"); 

  useEffect(() => {
    setLoaderColor(theme === "dark" ? "#FFFFFF" : "#000000");
  }, [theme]);

  return (
    <div className="flex justify-center items-center h-screen w-screen fixed top-0 left-0 z-50 bg-white dark:bg-gray-900 bg-opacity-80">
      <ScaleLoader loading={true} color={loaderColor} />
    </div>
  );
}
