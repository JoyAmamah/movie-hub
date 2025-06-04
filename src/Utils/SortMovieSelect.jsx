import React from "react";

const SortMovieSelect = ({ onFilterYear, onSetFilterYear }) => {
  

  return (
     <select 
          value={onFilterYear} 
          onChange={(e) => onSetFilterYear(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="popularity.desc">Popularity</option>
          <option value="release_date.desc">Release Date</option>
          <option value="vote_average.desc">Rating</option>
        </select>
  );
};

export default SortMovieSelect;
