import { Search } from "lucide-react";
import React, { useContext } from "react";
import { SearchContext } from "@/app/(context)/SearchContext";

function SearchSection() {
  const { userSearchInput, setUserSearchInput } = useContext(SearchContext);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserSearchInput(event.target.value);
  };

  return (
    <div  className="p-10 bg-gradient-to-br from-black via-violet-950 to-black flex flex-col justify-center items-center text-white" style={{
      backgroundImage: 'url(https://i.pinimg.com/originals/6d/19/7b/6d197b048d6fdfbaee6a24963d6b7eed.gif)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }} >
      <h2 className="text-2xl sm:text-3xl font-bold">Browse all templates</h2>
      <p className="mt-2">What would you like to create today?</p>
      <div className="w-full flex justify-center mt-5">
        <div className="flex gap-2 items-center p-2 border rounded-md w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent text-white w-full"
            value={userSearchInput}
            onChange={handleSearchInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
