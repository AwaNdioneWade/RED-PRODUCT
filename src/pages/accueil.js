import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PartieDroite from './partieDroite';
import PartieGauche from './partieGauche';
import { Container } from './style';

const PageAccueil = ({token, setToken, setNoLog}) => {
    const [selectedItem, setSelectedItem] = useState('');

    const [isOpen, setIsOpen] = useState(true);
    
    const handleClickBurger = () => {
      setIsOpen(!isOpen);
    };
  

    const handleClick = (item) => {
      setSelectedItem(item);
    };
 
  
    return(
      <Container>
        <PartieGauche handleClickBurger={handleClickBurger} isOpen={isOpen} token={token} setToken={setToken} selectedItem={selectedItem} onItemClick={handleClick} />
        <PartieDroite handleClickBurger={handleClickBurger} isOpen={isOpen} setIsOpen={setIsOpen} setNoLog={setNoLog} setToken={setToken} selectedItem={selectedItem} />
      </Container>
    )
  }

  export default PageAccueil;