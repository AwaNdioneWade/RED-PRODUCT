import { useEffect, useState } from 'react';
import axios from 'axios';
import { DivBurger, CustomLink, DivCrud, DivProfil, DivProfilSid, Etat, Gauche, IconCrud, Profil, SidebarEnHaut, TexteCrud, TextePrincipal, Title } from './style';
import { MdDashboard } from 'react-icons/md';
import { SlScreenDesktop } from 'react-icons/sl';
import { GiHamburgerMenu } from "react-icons/gi";

const PartieGauche = ({ onItemClick, selectedItem, isOpen, handleClickBurger }) => {
  const [user, setUser] = useState(null);    
    
  // const fetchUserProfile = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:4000/auth/profile', {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem('token')}`, 
  //       },
  //     });
  //     setUser(response.data);
  //   } catch (error) {
  //     console.error('Erreur lors de la récupération du profil de l\'utilisateur :', error);
  //     throw error;
  //   }
  // };
  
  // useEffect(() => {
  //   fetchUserProfile();
  //   console.log(user);
  // }, [user]); 

    return (
      <Gauche isOpen={isOpen}>
        <SidebarEnHaut>
          <DivBurger isOpen={isOpen} onClick={handleClickBurger}><GiHamburgerMenu /></DivBurger>
          <Title>RED PRODUCT</Title>
          <TextePrincipal>Principal</TextePrincipal>
          <DivCrud isDashboard={selectedItem === 'dashboard' || selectedItem === ''}>
            <IconCrud><MdDashboard /></IconCrud>
            <TexteCrud>
              <CustomLink isDashboard={selectedItem === 'dashboard' || selectedItem === ''} onClick={() => onItemClick('dashboard')}>Dashboard</CustomLink>
            </TexteCrud>
          </DivCrud>
          <DivCrud isDashboard={selectedItem === 'hotels'}>
            <IconCrud><SlScreenDesktop /></IconCrud>
            <TexteCrud>
              <CustomLink isDashboard={selectedItem === 'hotels'} onClick={() => onItemClick('hotels')}>Liste Hotels</CustomLink>
            </TexteCrud>
          </DivCrud>
        </SidebarEnHaut>
        <DivProfilSid>
          <DivProfil/>
          <Profil>
            <p></p>
            <Etat>En ligne</Etat>
          </Profil>
        </DivProfilSid>
      </Gauche>
    );
  };
  export default PartieGauche;