import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import LocationGallery from "../LocationGallery/LocationGallery";
import Pagination from "../Pagination/Pagination";
import "./Location.scss";

export default function Locations() {
  const [locations, setLocations] = useState([]);

  const getLocations = async (newPage = 1) => {
    const res = await axios(
      "https://rickandmortyapi.com/api/location?page=" + newPage
    );
    setLocations(res.data.results);
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <div className="locations-div">
      <Pagination pageData={getLocations} />
      <LocationGallery list={locations} />
    </div>
  );
}
