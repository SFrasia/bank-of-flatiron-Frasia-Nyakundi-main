import React from "react";

function Search({ handleSearch }) {
  return (
    <div className="peer h-full w-full outline-none text-sm text-gray-700 pr-2">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
