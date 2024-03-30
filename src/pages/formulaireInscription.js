import React, { useState } from "react";
import axios from "axios";

import { DivContainer, Span, ContainerForm, FormLog, TitleLog, InputLog, InputCheckbox, ButtonInscrire, BtnLink } from "./style";

const FormulaireInscription = ({setNoLog}) => {

  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  
  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isChecked) {
        const response = await axios.post("https://red-product-api-rn66.onrender.com/signup", {
          nom,
          email,
          password,
        });
        
        setNoLog(false)
      } else {
        alert("Accepte les condition d'utilisateur")
      }

      console.log(response.data);
    } catch (error) {
      console.error("Erreur lors de linscription :", error);
    }
  };

  const handleLogin = () => {
    setNoLog(false)
    console.log("Se connecté");
  };
    
  return (
    <DivContainer>
      <ContainerForm>
        <FormLog>
          <TitleLog>Inscrivez-vous en tant que Admin</TitleLog>
          <InputLog value={nom} onChange={(e) => setNom(e.target.value)}  placeholder="Nom" />
          <InputLog value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="E-mail"/>
          <InputLog value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Mot de passe"/>
          <TitleLog>
            <InputCheckbox
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckBoxChange}
            /> Accepter les termes et la politique
          </TitleLog>
          <ButtonInscrire onClick={handleSubmit}>Inscrire</ButtonInscrire>
        </FormLog> 
        <Span>Vous avez un compte? <BtnLink onClick={handleLogin}>Se connecter</BtnLink></Span>
      </ContainerForm> 
    </DivContainer> 
  );
}

export default FormulaireInscription;
