import React from "react";
import SearchInputs from "../../Utils/SearchInputs";
import FilterInputs from "../../Utils/FilterInputs";
import FilterYearInputs from "../../Utils/FilterYearInputs";

const Header = ({
  searchValue,
  setSearchValue,
  onFilterGenre,
  onSetFilterGenre,
  onFilterYear,
  onSetFilterYear,
}) => {
  return (
    <div>
      <header className="flex flex-col gap-4 md:flex-row md:justify-between items-center ">
        <h1 className="text-2xl font-bold"> MOVIE HUB</h1>

        <div className="flex flex-row gap-4 justify-between">
          <FilterInputs
            onFilterGenre={onFilterGenre}
            onSetFilterGenre={onSetFilterGenre}
          />
          <FilterYearInputs
            onFilterYear={onFilterYear}
            onSetFilterYear={onSetFilterYear}
          />
        </div>
      </header>
      <div className="flex justify-center items-center my-3">
        <SearchInputs
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
      </div>
    </div>
  );
};

export default Header;
