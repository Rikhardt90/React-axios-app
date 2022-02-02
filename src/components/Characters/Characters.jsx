import React, { useState } from "react";
import { useEffect } from "react";
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
    <div>
      <Gallery list={characters} />
      <Pagination pageData={getCharacters} />
    </div>
  );
}
