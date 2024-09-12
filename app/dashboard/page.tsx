"use client";
import React, { useContext } from "react";
import SearchSection from "./_components/SearchSection";
import TemplateListSection from "./_components/TemplateListSection";
import { SearchContext } from "../(context)/SearchContext";


function Dashboard() {
  const { userSearchInput } = useContext(SearchContext);
  

  return (
    <div>
      <SearchSection />
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-white dark:text-white font-bold mt-6 mb-2">
          We have 50+ AI Content Templates
        </h2>
        <h3 className="text-md sm:text-lg lg:text-xl text-gray-200 dark:text-gray-300 mb-6">
          Here are the most popular templates
        </h3>
      </div>
      <TemplateListSection userSearchInput={userSearchInput} />
      
    </div>
  );
}

export default Dashboard;
