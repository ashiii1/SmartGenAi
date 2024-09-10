"use client";
import React, { useContext } from "react";
import TemplateListSection from "../_components/TemplateListSection";
import { SearchContext } from "../../(context)/SearchContext";

function SearchPage() {
  const { userSearchInput } = useContext(SearchContext);

  return (
    <div>
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  );
}

export default SearchPage;
