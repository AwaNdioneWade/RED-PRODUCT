import React, { useState, useEffect } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { TextDivAjout, DivBurger ,Bienvenue, Dashboard, DivAjout, DivIcone, DivProfil, DivSecondBar, Droit, Disconnect, Lorem, SearchInput, Bar } from "./style";
import Modal from "./modal";
import DashboardContenu from "./DashboardContenu";
import HotelsContenu from "./hotelContenu";
const axios = require("axios");


const PartieDroite = ({ selectedItem, setToken, setNoLog, handleClickBurger, isOpen, setIsOpen }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [valueSearch, setValueSearch] = useState("");

    const [hotels, setHotels] = useState([])
  
    const fetchAllHotels = async () => {
      try {
        const response = await axios.get("https://red-product-api-rn66.onrender.com/hotels");
        const recupHotesl = response.data
        setHotels(recupHotesl)
        console.log(response.data);
        console.log({hotels});
        return response.data; // Les données des hôtels sont renvoyées si la requête réussit
      } catch (error) {
        console.error("Erreur lors de la récupération des hôtels :", error);
        throw error; 
      }
    };

    useEffect(()=>{
      fetchAllHotels()
    }, [hotels])
  
    const handleDivAjoutClick = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
    const handleDisconnect = () => {
      if (typeof window !== 'undefined') {
        localStorage.removeItem("token");
      }
      setToken(null); // Assurez-vous également de passer null au lieu du token supprimé
      setNoLog(false);
      console.log("Déconnecté");
    };
    
    
    const [hotelsFiltred, setHotelsFiltred] = useState([])

    const filtreHotels = hotels.filter((hotel) => 
    hotel.nom.toLowerCase().includes(valueSearch.toLowerCase())
    )
    useEffect(()=>{
      setHotelsFiltred(filtreHotels)
      console.log({hotelsFiltred})
    }, [hotels])

  
    return (
      <Droit>
        <Bar navbar >
          <DivBurger isOpen={isOpen} onClick={handleClickBurger}><GiHamburgerMenu /></DivBurger>
          <Dashboard>{selectedItem === "dashboard" ? "Dashboard" 
            : selectedItem === "hotels" ? "Liste Hotels" : "Dashboard"}
          </Dashboard>
          <DivIcone>
            <SearchInput value={valueSearch} onChange={(e) => setValueSearch(e.target.value)} placeholder="Recherche..." />
            <IoMdNotificationsOutline />
            <DivProfil />
            <Disconnect onClick={handleDisconnect} >
              <FaArrowRightFromBracket />
            </Disconnect>
          </DivIcone>
        </Bar>
        <Bar secondBar >
          <DivSecondBar>
            <Bienvenue>{selectedItem === "dashboard" ? "Bienvenue sur RedProduct" 
              : selectedItem === "hotels" ? "Hotels" : "Bienvenue sur RedProduct"}
            </Bienvenue>
            <Lorem>{selectedItem === "dashboard" ? "" 
            : selectedItem === "hotels" ? "Lorem ipsum" : ""}
            </Lorem>
          </DivSecondBar>
          {selectedItem === "dashboard" ? "" 
          : selectedItem === "hotels" ? <>
                                          <DivAjout onClick={handleDivAjoutClick} >
                                          + <TextDivAjout>Créer un nouveau hotel</TextDivAjout>                                          </DivAjout>
                                          <Modal show={modalOpen} onClose={closeModal} />
                                        </>
                                           : ""}
        </Bar>
          {selectedItem === "" && <DashboardContenu />}
          {selectedItem === "dashboard" && <DashboardContenu />}
          {selectedItem === "hotels" && <HotelsContenu filtreHotels={filtreHotels} />}
      </Droit>
    );
  };

export default PartieDroite;