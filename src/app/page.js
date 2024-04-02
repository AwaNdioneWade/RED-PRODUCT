"use client";
import React, { useEffect, useState } from "react";

import PageAccueil from "../pages/accueil";
import FormulaireLogin from "../pages/formulaireLogin";
import FormulaireInscription from "../pages/formulaireInscription"
import FormulaireMdpOubli from "../pages/formulaireMDP"

export default function Home() {

  const [token, setToken] = useState(null); 
  const [noLog, setNoLog] = useState(false)  
  const [noMdp, setNoMdp] = useState(true)  
  
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);


  return (            
    token ? <PageAccueil token={token} setNoLog={setNoLog} setToken = {setToken} /> 
            : noLog ? <FormulaireInscription setNoLog={setNoLog} /> 
            : noMdp ? 
            <FormulaireLogin setNoMdp={setNoMdp} setNoLog={setNoLog} setToken={setToken} /> 
            : <FormulaireMdpOubli />
  
            );
}