import React from "react";

const SearchInputs = ({ searchValue, setSearchValue }) => {
  return (
    <input
      type="text"
      className="form-input w-full rounded-md first-line:"
      value={searchValue}
      placeholder="Type To Search For Movies"
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};

export default SearchInputs;
