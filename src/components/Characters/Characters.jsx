import React, { useState } from "react";
import { useEffect } from "react";
import "./Characters.scss";
import axios from "axios";
import Gallery from "../Gallery/Gallery";
import Pagination from "../Pagination/Pagination";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async (newPage = 1) => {
    const res = await axios(
      "https://rickandmortyapi.com/api/character?page=" + newPage
    );
    setCharacters(res.data.results);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="character-div">
      <Pagination pageData={getCharacters} />
      <Gallery list={characters} />
    </div>
  );
}
