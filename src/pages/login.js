import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import { BsBookmarkFill } from "react-icons/bs";

import { TitleForm, DivContainer, ContainerForm, FormLog, TitleLog, InputLog, InputCheckbox, ButtonInscrire, BtnLink, Span } from "./style";


const FormulaireLogin = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };

  const router = useRouter();


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://red-product-api-rn66.onrender.com/auth/login", {
        email,
        password,
      });
      console.log(response.data);
      const token = response.data.token;
      // Stocker le token dans le local storage
        localStorage.setItem("token", token);
        router.push("/dashboard");
      if (typeof window !== "undefined") {
      }
      // setToken(token);
    } catch (error) {
      alert("Email où mot de passe incorrect")
      console.error("Erreur lors de la connexion :", error);
    }
  };    

  const handleInscrire = () => {
    console.log("Inscrire");
    setNoLog(true)
  };

  const handleMdp = () => {
    console.log("réinitialise");
    setNoMdp(false)
  };

  return(
    <DivContainer>
      <ContainerForm>      
          <TitleForm><BsBookmarkFill /> Red Product</TitleForm>
        <FormLog onSubmit={handleLogin}>
          <TitleLog>Connectez-vous en tant quadministrateur</TitleLog>
            <InputLog value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail"/>
            <InputLog value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" />
            <TitleLog>
              <InputCheckbox
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckBoxChange}
              /> Gardez-moi connecté
            </TitleLog>
              <ButtonInscrire type="submit">Se connecter</ButtonInscrire>
        </FormLog> 
        <BtnLink onClick={handleMdp}>Mot de passe oublié?</BtnLink>
        <Span>Vous n&aposavez pas de compte? <BtnLink onClick={handleInscrire}>Inscrire</BtnLink></Span>
      </ContainerForm>
    </DivContainer>
  )
}
export default FormulaireLogin;