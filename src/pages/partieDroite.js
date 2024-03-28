import React, { useState } from 'react';

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { BackgroundContainer, Bar, DivBurger ,Bienvenue, Dashboard, DivAjout, DivIcone, DivProfil, DivSecondBar, Droit, Disconnect, Lorem, SearchInput } from './style';
import Modal from './modal';
import DashboardContenu from './DashboardContenu';
import HotelsContenu from './hotelContenu';

const PartieDroite = ({ selectedItem, setToken, setNoLog, handleClickBurger, isOpen, setIsOpen }) => {
    const [modalOpen, setModalOpen] = useState(false);
  
    const handleDivAjoutClick = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
    const handleDisconnect = () => {
      localStorage.removeItem("token")
      const token = localStorage.removeItem("token");
      setToken(token)
      setNoLog(false)
      console.log('Deconnecté')
    };
    

  
   
    return (
      <Droit>
        <Bar navbar >
          <DivBurger isOpen={isOpen} onClick={handleClickBurger}><GiHamburgerMenu /></DivBurger>
          <Dashboard>{selectedItem === 'dashboard' ? 'Dashboard' 
            : selectedItem === 'hotels' ? 'Liste Hotels' : 'Dashboard'}
          </Dashboard>
          <DivIcone>
            <SearchInput placeholder="Recherche..." />
            <IoMdNotificationsOutline />
            <DivProfil />
            <Disconnect onClick={handleDisconnect} >
              <FaArrowRightFromBracket />
            </Disconnect>
          </DivIcone>
        </Bar>
        <Bar secondBar >
          <DivSecondBar>
            <Bienvenue>{selectedItem === 'dashboard' ? 'Bienvenue sur RedProduct' 
              : selectedItem === 'hotels' ? 'Hotels' : 'Bienvenue sur RedProduct'}
            </Bienvenue>
            <Lorem>{selectedItem === 'dashboard' ? '' 
            : selectedItem === 'hotels' ? 'Lorem ipsum dolor sit amet.' : ''}
            </Lorem>
          </DivSecondBar>
          {selectedItem === 'dashboard' ? '' 
          : selectedItem === 'hotels' ? <>
                                          <DivAjout onClick={handleDivAjoutClick} >
                                          + Créer un nouveau hotel
                                          </DivAjout>
                                          <Modal show={modalOpen} onClose={closeModal} />
                                        </>
                                           : ''}
        </Bar>
        {/* <BackgroundContainer> */}
          {selectedItem === '' && <DashboardContenu />}
          {selectedItem === 'dashboard' && <DashboardContenu />}
          {selectedItem === 'hotels' && <HotelsContenu />}
        {/* </BackgroundContainer> */}
      </Droit>
    );
  };

export default PartieDroite;