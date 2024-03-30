import React, { useState } from "react";
import axios from "axios";

import { BtnLink, ContainerForm, FormLog, TitleLog, TexteFormulaireMdpOubli, InputLog, ButtonInscrire } from "./style";
 
const FormulaireMdpOubli = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/auth/forgot-password", { email });
      setMessage(response.data.message);
      console.log(message);
    } catch (error) {
      console.error("Erreur lors de la réinitialisation du mot de passe :", error);
    }
  };

  return(
    <ContainerForm>      
      <FormLog>
        <TitleLog>Inscrivez-vous en tant qu &apos administrateur</TitleLog>
        <TexteFormulaireMdpOubli>
          Entrez votre adresse e-mail ci-dessous et nous vous enverrons des instructions sur la façon de modifier votre mot de passe.
        </TexteFormulaireMdpOubli>
          <InputLog value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="E-mail"/>
          <ButtonInscrire onClick={handleSubmit}>Réinitialiser</ButtonInscrire>
      </FormLog> 
      <span>Revenir à la <BtnLink>Connexion</BtnLink></span>
    </ContainerForm>  
  )
}
export default FormulaireMdpOubli;


// bpkv crqb uzjj d mel