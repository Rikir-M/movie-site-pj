import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import "./App.css";
import Navigation from "./components/Navigation";
import Filtered from "./components/Filtered";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const [trending, setTrending] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState([0]);

  useEffect(() => {
    fetchTrending();
  }, []);

  const fetchTrending = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=3c04cbec57fe01f7ea7a4477879112ac`
    );
    const { results } = await api.json();
    setTrending(results);
    setFiltered(results);
    console.log(results);
  };

  return (
    <div className="app">
      <Navigation />
      <motion.div >
        <Filtered
          filtered={filtered}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
          trending={trending}
        />
      </motion.div>
      <motion.div
        layout
        className=" flex flex-wrap gap-20 mt-10 justify-center"
      >
        <AnimatePresence>
          {filtered.map((movie) => {
            return <Movie key={movie.id} {...movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default App;
