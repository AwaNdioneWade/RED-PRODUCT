import React, { useState } from 'react';
import axios from 'axios';
import { BsBookmarkFill } from "react-icons/bs";

import { TitleForm, DivContainer, ContainerForm, FormLog, TitleLog, InputLog, InputCheckbox, ButtonInscrire, BtnLink, Span } from './style';

const FormulaireLogin = ({ setToken, setNoLog }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  
    const handleCheckBoxChange = () => {
      setIsChecked(!isChecked);
    };

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:4000/auth/login", {
          email,
          password,
        });
        console.log(response.data);
        const token = response.data.token;
        // Stocker le token dans le local storage
        localStorage.setItem("token", token);
        const tokenRecup = localStorage.getItem("token", token);
        setToken(tokenRecup)
      } catch (error) {
        console.error("Erreur lors de la connexion :", error);
      }
    };
    

    const handleInscrire = () => {
      console.log("Inscrire");
      setNoLog(true)
    };

    return(
      <DivContainer>
        <ContainerForm>      
            <TitleForm><BsBookmarkFill /> Red Product</TitleForm>
          <FormLog>
            <TitleLog>Connectez-vous en tant qu'administrateur</TitleLog>
              <InputLog value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail"/>
              <InputLog value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" />
              <TitleLog>
                <InputCheckbox
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckBoxChange}
                /> Gardez-moi connecté
              </TitleLog>
                <ButtonInscrire onClick={handleLogin}>Se connecter</ButtonInscrire>
          </FormLog> 
          <BtnLink>Mot de passe oublié?</BtnLink>
          <Span>Vous n'avez pas de compte? <BtnLink onClick={handleInscrire}>Inscrire</BtnLink></Span>
        </ContainerForm>
      </DivContainer>
    )
  }

export default FormulaireLogin;
