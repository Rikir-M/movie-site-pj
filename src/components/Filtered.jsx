import React, { useEffect } from "react";
import "./Style.css";

const Filtered = ({
  filtered,
  setFiltered,
  activeGenre,
  setActiveGenre,
  trending,
}) => {
  const trends = () => {
    setActiveGenre(0);
    setFiltered(trending)
  };

  useEffect(() => {
    const filterMovie = trending.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filterMovie);
  }, [activeGenre]);
  return (
    <div className=" ml-20 mt-5">
      <button
        onClick={trends}
        className=" btn text-white text-lg rounded px-5 py-1"
      >
        Trending
      </button>
      <button
        onClick={() => setActiveGenre(28)}
        className=" btn text-white ml-10 mr-10 text-lg rounded px-5 py-1"
      >
        Action
      </button>
      <button
        onClick={() => setActiveGenre(35)}
        className=" btn text-white text-lg rounded px-5 py-1"
      >
        Comedy
      </button>
    </div>
  );
};

export default Filtered;
