import { useRouter } from "next/navigation";
import React, { useState, useEffect, useContext } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { TextDivAjout, DivBurger ,Bienvenue, Dashboard, DivAjout, DivIcone, DivProfil, DivSecondBar, Droit, Disconnect, Lorem, SearchInput, Bar } from "./style";
import Modal from "./modal";
import DashboardContenu from "./dashboard";
import { HotelContext } from "./hotelprovider";
const axios = require("axios");


const PartieDroite = ({ selectedItem, handleClickBurger, isOpen, children  }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const{valueSearch, setValueSearch} = useContext(HotelContext)
  
    const handleDivAjoutClick = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
    const router = useRouter();
    const handleDisconnect = () => {
      if (typeof window !== 'undefined') {
      }
      
      localStorage.removeItem("token");
      router.push("/login");
      console.log("Déconnecté");
    };
    
    

  
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
            {children}
      </Droit>
    );
  };

export default PartieDroite;