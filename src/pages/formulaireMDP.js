import React from 'react';

import { ContainerForm, FormLog, TitleLog, TexteFormulaireMdpOubli, InputLog, ButtonInscrire } from './style';

const FormulaireMdpOubli = () => {

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
export default FormulaireMdpOubli;