'use client';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PageAccueil from '../pages/accueil';
import FormulaireLogin from '../pages/formulaireLogin';
import FormulaireInscription from '../pages/formulaireInscription'

export default function Home() {

  const [token, setToken] = useState(localStorage.getItem("token")); 
  const [noLog, setNoLog] = useState(false)  
  

  return (            
    token ? <PageAccueil token={token} setNoLog={setNoLog} setToken = {setToken} /> 
            : noLog ? <FormulaireInscription setNoLog={setNoLog} /> : <FormulaireLogin setNoLog={setNoLog} setToken={setToken} />
  );
}





const TexteFormulaireMdpOubli = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`

const FormulaireMdpOubli = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleIsLogin = () => {
    setIsChecked(!isChecked);
  };
  return(
    <ContainerForm>      
      <FormLog>
        <TitleLog>Inscrivez-vous en tant que Admin</TitleLog>
        <TexteFormulaireMdpOubli>
          Entrez votre adresse e-mail ci-dessous et nous vous envoyons des instructions sur la façon de modifier votre mot de passe.
        </TexteFormulaireMdpOubli>
          <InputLog placeholder='E-mail'/>
          <ButtonInscrire>S'inscrire'</ButtonInscrire>
      </FormLog> 
      <span>Revenir à la <Mdp>Connexion</Mdp></span>
    </ContainerForm>  
  )
}