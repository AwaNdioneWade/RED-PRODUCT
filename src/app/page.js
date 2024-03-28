'use client';
import React, { useState } from 'react';

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