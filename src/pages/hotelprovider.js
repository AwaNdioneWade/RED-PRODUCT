"use client";
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const HotelContext = createContext();

const HotelProvider = ({ children }) => {
  const [valueSearch, setValueSearch] = useState("");
  const [hotels, setHotels] = useState([]);

  const fetchAllHotels = async () => {
    try {
      const response = await axios.get("https://red-product-api-rn66.onrender.com/hotels");
      const recupHotesl = response.data;
      setHotels(recupHotesl);
      console.log(response.data);
      console.log({ hotels });
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des hôtels :", error);
      throw error;
    }
  };
  
  useEffect(() => {
    fetchAllHotels();
  }, []);

  const filtreHotels = hotels.filter((hotel) => 
  hotel.nom.toLowerCase().includes(valueSearch.toLowerCase())
  )

  return (
    <HotelContext.Provider
      value={{
        valueSearch,
        setValueSearch,
        hotels,
        fetchAllHotels,
        filtreHotels,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
};

export { HotelContext, HotelProvider };
