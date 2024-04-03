import { useState } from "react";
import { DivBurgerSid, CustomLink, DivCrud, DivProfil, DivProfilSid, Etat, Gauche, IconCrud, Profil, SidebarEnHaut, TexteCrud, TextePrincipal, Title } from "./style";
import { MdDashboard } from "react-icons/md";
import { SlScreenDesktop } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const PartieGauche = ({ onItemClick, selectedItem, isOpen,Open, handleClickBurger }) => {
  const [user, setUser] = useState(null);    
    
  // const fetchUserProfile = async () => {
  //   try {
  //     const response = await axios.get("https://red-product-api-rn66.onrender.com/auth/profile", {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`, 
  //       },
  //     });
  //     setUser(response.data);
  //   } catch (error) {
  //     console.error("Erreur lors de la récupération du profil de lutilisateur :", error);
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
          <DivBurgerSid isOpen={Open} onClick={handleClickBurger}><GiHamburgerMenu /></DivBurgerSid>
          <Title>RED PRODUCT</Title>
          <TextePrincipal>Principal</TextePrincipal>
          <DivCrud isDashboard={selectedItem === "dashboard" || selectedItem === ""}>
            <IconCrud><MdDashboard /></IconCrud>
            <TexteCrud>              
              <Link href="/dashboard">   
                <CustomLink isDashboard={selectedItem === "dashboard" || selectedItem === ""} >
                  Dashboard
                </CustomLink>             
              </Link>
            </TexteCrud>
          </DivCrud>
          <DivCrud isDashboard={selectedItem === "hotels"}>
            <IconCrud><SlScreenDesktop /></IconCrud>
            <TexteCrud>
              <Link href="/hotels">
                <CustomLink isDashboard={selectedItem === "hotels"}>
                  Liste Hotels
                </CustomLink>
              </Link>
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