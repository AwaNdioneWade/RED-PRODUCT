"use client";
import React, { useState } from "react";

import PageAccueil from "../pages/accueil";
import FormulaireLogin from "../pages/formulaireLogin";
import FormulaireInscription from "../pages/formulaireInscription"
import FormulaireMdpOubli from "../pages/formulaireMDP"

export default function Home() {

  const [token, setToken] = useState(localStorage.getItem("token")); 
  const [noLog, setNoLog] = useState(false)  
  const [noMdp, setNoMdp] = useState(true)  
  

  return (            
    token ? <PageAccueil token={token} setNoLog={setNoLog} setToken = {setToken} /> 
            : noLog ? <FormulaireInscription setNoLog={setNoLog} /> 
            : noMdp ? <FormulaireLogin setNoMdp={setNoMdp} setNoLog={setNoLog} setToken={setToken} /> 
            : <FormulaireMdpOubli />
  );
}