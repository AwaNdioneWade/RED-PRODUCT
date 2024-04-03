import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PartieGauche from "./partieGauche";
import PartieDroite from "./partieDroite";
import { HotelProvider } from "./hotelprovider"
import { Container } from "./style";
const axios = require("axios");

const PageAccueil = ({children}) => {
    const [selectedItem, setSelectedItem] = useState("");

    const [isOpen, setIsOpen] = useState(true);
    const [Open, setOpen] = useState(false);
    
    const handleClickBurger = () => {
      setIsOpen(!isOpen);
      setOpen(!Open);
    };
  
    const router = useRouter();

    const handleClick = (item) => {
      setSelectedItem(item);
      router.push(`/${item}`)
      console.log(item)
    };
    

 
    return(
      <Container>
        <PartieGauche handleClickBurger={handleClickBurger} Open={Open} isOpen={isOpen} selectedItem={selectedItem} onItemClick={handleClick} />
            
            <HotelProvider>
              <PartieDroite children={children} handleClickBurger={handleClickBurger} isOpen={isOpen} setIsOpen={setIsOpen} selectedItem={selectedItem} >
                
              </PartieDroite>               
            </HotelProvider>
      </Container>
    )
  }

  export default PageAccueil;