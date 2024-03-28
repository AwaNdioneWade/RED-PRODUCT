import React from 'react';

import { BtnLink, ContainerForm, FormLog, TitleLog, TexteFormulaireMdpOubli, InputLog, ButtonInscrire } from './style';

const FormulaireMdpOubli = () => {

  return(
    <ContainerForm>      
      <FormLog>
        <TitleLog>Inscrivez-vous en tant qu'administrateur</TitleLog>
        <TexteFormulaireMdpOubli>
          Entrez votre adresse e-mail ci-dessous et nous vous enverrons des instructions sur la façon de modifier votre mot de passe.
        </TexteFormulaireMdpOubli>
          <InputLog placeholder="E-mail"/>
          <ButtonInscrire>S'inscrire</ButtonInscrire>
      </FormLog> 
      <span>Revenir à la <BtnLink>Connexion</BtnLink></span>
    </ContainerForm>  
  )
}
export default FormulaireMdpOubli;
