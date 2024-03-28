import React, { useState } from 'react';
import { Container } from '../../style';

const MaPageAccueil = ({handleClickPageLog}) => {
    const [selectedItem, setSelectedItem] = useState('');
    
    const handleClick = (item) => {
      setSelectedItem(item);
    };
  
    return(
      <Container>
        <PartieGauche selectedItem={selectedItem} onItemClick={handleClick} />
        <PartieDroit handleClickPageLog={handleClickPageLog} selectedItem={selectedItem} />
      </Container>
    )
  }

  export default MaPageAccueil;