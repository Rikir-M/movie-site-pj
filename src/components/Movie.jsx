import React from "react";
import { Heart } from "react-bootstrap-icons";
import { motion } from "framer-motion";

const Movie = ({
  name,
  title,
  backdrop_path,
  overview,
  release_date,
  first_air_date,
}) => {
  return (
      <motion.div layout  >
        <img
          className=" rounded-lg"
          src={"https://image.tmdb.org/t/p/w400/" + backdrop_path}
          alt=""
        />
        <div className=" flex justify-between">
          <p className="name mt-1 text-lg font-bold">
            {title}
            {name}
          </p>
          <button className=" text-blue-200">
            <Heart />
          </button>
        </div>
        <p className=" mt-2">{overview.substr(0, 55) + "...."}</p>
        <p className=" text-xs mt-1">
          {release_date}
          {first_air_date}
        </p>
      </motion.div>
  );
};

export default Movie;
