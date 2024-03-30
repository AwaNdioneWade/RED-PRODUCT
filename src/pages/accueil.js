import React, { useState } from "react";
import PartieDroite from "./partieDroite";
import PartieGauche from "./partieGauche";
import { Container } from "./style";

const PageAccueil = ({token, setToken, setNoLog}) => {
    const [selectedItem, setSelectedItem] = useState("");

    const [isOpen, setIsOpen] = useState(true);
    const [Open, setOpen] = useState(false);
    
    const handleClickBurger = () => {
      setIsOpen(!isOpen);
      setOpen(!Open);
    };
  

    const handleClick = (item) => {
      setSelectedItem(item);
    };
 
  
    return(
      <Container>
        <PartieGauche handleClickBurger={handleClickBurger} Open={Open} isOpen={isOpen} token={token} setToken={setToken} selectedItem={selectedItem} onItemClick={handleClick} />
        <PartieDroite handleClickBurger={handleClickBurger} isOpen={isOpen} setIsOpen={setIsOpen} setNoLog={setNoLog} setToken={setToken} selectedItem={selectedItem} />
      </Container>
    )
  }

  export default PageAccueil;