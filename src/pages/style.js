'use client';

import styled from 'styled-components';

import { css } from 'styled-components';


export const Container = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const BackgroundContainer = styled.div`
  // background: #F0F0F0;
  width: 98.9%;
  height: 100vh;
  padding-right : 25px;
  
  @media (max-width: 1230px) {
    width: 92%;
    padding-right : 0px;
    margin-left : 125px;
  }
  
  @media (max-width: 882px) {
    width: 850px;
  }

`;

export const DivContainer = styled.div`
  background: #555555;
  width: 100%;
  height: 100vh;
  position: fixed;
`;

// STYLE PARTIE GAUCHE

export const Gauche = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #55595C;
  width: 250px;
  height: 100vh;
  color: white;
  z-index: 99;
  
  @media (max-width: 1230px) {
    width: 250px;
  }

  @media (max-width: 882px) {
    display: ${props => props.isOpen ? 'none' : 'flex'};  }
`;
export const SidebarEnHaut = styled.div`
  justify-content: none;
`;
export const Title = styled.p`
  font-size: 26.66px;
  font-weight: 700;
  line-height: 21.33px;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 30px;
  padding-left: 20px;
`;
export const TextePrincipal = styled.p`
  font-size: 16.8px;
  font-weight: 400;
  line-height: 47.99px;
  text-align: left;
  padding-left: 20px;
`;
export const DivCrud = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0 12px 20px;
  background: ${props => props.isDashboard ? '#F0F0F0' : 'none'};
  color: ${props => props.isDashboard ? '#55595C' : '#F0F0F0'};
`;
export const IconCrud = styled.div`
  font-size: 18.66px;
  width: 23px;
  height: 23px;
  left: 0px;
  gap: 0px;
  opacity: 0px;
`;
export const TexteCrud = styled.div`
  font-size: 18.66px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
`;
export const CustomLink = styled.a`
color: ${props => props.isDashboard ? '#55595C' : '#F0F0F0'};
  text-decoration: none;
  cursor: pointer;
  padding-left: 20px;
`;
export const DivProfilSid = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  margin-bottom: 150px;
  bacground: #F0F0F0;
  border-top: 1px solid #F0F0F0;
`;
export const Profil = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18.66px;
  font-weight: 500;
  line-height: 28px;
  text-align: left; 
  
`;
export const Etat = styled.p`
  font-size: 16.8px;
  font-weight: 400;
  line-height: 25.2px;
  text-align: left;
`
export const DivProfil = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 25px;
  background-image: url("data:image/jpeg;base64,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");
  background-size: cover;
`;

// STYLE PARTIE DROITE

export const Droit = styled.div`
  posiion: fixed;
  width: 82%;
  margin-left: 18%;
  background: #F0F0F0;
  height: 100vh;

  @media (max-width: 1230px) {
    width: 83%;
  }

  @media (max-width: 1004px) {
    width: 100%;
  }
  
  @media (max-width: 882px) {
    margin-left: 0px;
    padding-right: 75px;
    width: 90%;
  }
  
  @media (max-width: 845px) {
    padding-right: 85px;
  }

  @media (max-width: 835px) {
    padding-right: 100px;
  }
`
export const Disconnect = styled.button`
  font-size: 24px;
  border: none;
  background: none;
  cursor: pointer;
`
export const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #FFFFFF;
  height: 75px;
  padding-left: 25px;
  margin-left: 8px;
  z-index: 0;

  
  @media (max-width: 1230px) {
    padding-left: 70px;
  }
  
    @media (max-width: 1004px) {
      padding-left: 90px;
    }

  
  ${props => props.navbar && css`
    flex-wrap : wrap;
    position: fixed;
    width: 80%;
    align-items: center;
    justify-content: space-between;
    border-bottom: 4px solid #F0F0F0; 

    @media (max-width: 1230px) {
      width: 75%;
    }    

    @media (max-width: 1004px) {
      width: 73%;
    }

    @media (max-width: 739px) { 
      width: 97%;
      flex-wrap: wrap;
      padding-left: 0px;
      height: 125px;
    }
      

    

  `}

  ${props => props.secondBar && css`
    width: 97%;
    align-items: center;
    margin-top: 78px; 

    @media (max-width: 1230px) {
      width: 93.5%;
    }

    @media (max-width: 882px) {
      width: 850px;
      margin-top: 130px; 
    }

  `}

`
export const DivBurger= styled.button`  
  display: none;
  border: none;
  background: none;
  @media (max-width: 882px) { 
    font-size: 28px;
    display: flex;    
    display: ${props => props.isOpen ? 'flex' : 'none'};
  }
`
export const DivSecondBar = styled.div`
  display: flex;
  flex-direction: column;
`
export const Dashboard = styled.p`
font-size: 26px;
font-weight: 500;
text-align: left;
`;
export const Bienvenue = styled.p`
  font-size: 32px;
  font-weight: 300;
  line-height: 35.19px;
  text-align: left;
  @media (max-width: 882px) { 
    font-size: 20px;
    font-weight: 300;
    text-align: center;
  }
`;
export const Lorem = styled.p`
  font-size: 16.8px;
  font-weight: 400;
  line-height: 25.2px;
  text-align: left;
`
export const DivIcone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 22px;
  margin-right: 25px;
  @media (max-width: 882px) { 
    flex-wrap: wrap; 
  }
`;
export const SearchInput = styled.input`
  font-size: 16px;
  padding: 8px 12px 8px 40px; 
  border-radius: 20px;
  border: 1px solid #ccc;
  width: 250px;
  height: 20px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 10px 50%; 
  background-size: 20px 20px;
  outline: none;

  ::placeholder {
    color: #aaa;
  }
`;


// STYLE MODAL

export const DivAjout = styled.div`
  font-size: 16px;
  padding: 8px 12px 8px 40px; 
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 250px;
  height: 20px;
  cursor: pointer;
`;
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: ${props => props.show ? 'block' : 'none'}; 
  z-index: 999;
`;
export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;
export const AlignEnd = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
`
export const ButtonInscrire = styled.button`
  width: Hug (178px)px;
  height: Hug (59px)px;
  top: 826px;
  left: 747px;
  padding: 18px 44px 18px 44px;
  gap: 10px;
  border-radius: 14px;
  border: none;
  opacity: 0px;
  background: #555555;
  color: #FFFFFF;
  cursor: pointer;
`;
export const TexteBouton = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 22.23px;
  text-align: left;
`
export const TexteBack = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 34.17px;
  text-align: left;
  text-transform: uppercase;
`

// STYLE FORMULAIRE

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`
export const Label = styled.label`
  font-size: 16px;
  line-height: 27.79px;
  text-align: left;
`
export const Input = styled.input`
  width: 250px;
  height: 30px;
  top: 147px;
  left: 51px;
  gap: 0px;
  border-radius: 8px;
  border: 1px solid #55595C;
  outline: none;
`
export const Select = styled.select`
  width: 250px;
  height: 30px;
  top: 147px;
  left: 51px;
  gap: 0px;
  border-radius: 8px;
  border: 1px solid #55595C;
`
export const LabelInput = styled.div`
  display: flex;
  flex-direction: column;
`
export const DisplayRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px
`
export const ContainerInputImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 500px;
  height: 150px;
  border-radius: 14px;
  border: 1px solid #DDDDDD;
`
export const ImageInput = styled.input`
  display: none;
`
export const PreviewImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
`
export const DefaultImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 100px;
  border-radius: 10px;
  background: url('https://th.bing.com/th/id/OIP.8KLu2_AEKjF4pSQxEzzs3wAAAA?pid=ImgDet&w=182&h=102&c=7')

`
export const TexteInputImg = styled.span`
  cursor: pointer;
  font-family: Poppins;
  font-size: 17.06px;
  font-weight: 500;
  line-height: 26.81px;
  text-align: left;
  margin-top: 45px;
  color: #DDDDDD;
`

// STYLE DASHBOARD CONTENU
export const DivDashboardContenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const DivCard = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 1230px) {
   margin-left: 20px;
  }
  
  @media (max-width: 1130px) {
   margin-left: 50px;
  }

  @media (max-width: 1000px) {
   margin-left: 80px;
  }
  
  @media (max-width: 882px) {
   }
`
export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 106px;
  border-radius: 14px; 
  background: #FFFFFF;

  
  @media (max-width: 1330px) {
   width: 300px;
  }

  @media (max-width: 1230px) {
   width: 350px;
  }
  
  @media (max-width: 1000px) {
   width: 300px;
  }

  @media (max-width: 882px) {
   width: 320px;
  }
`
export const DivCardIcone = styled.div`
  display: flex;  
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.background || '#000000'};
  color: #FFFFFF;
  font-family: 'Material Icons';
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
`
export const TextCard = styled.div`
  display: flex; 
  flex-direction: column;
  margin-left: 10px;
`
export const NumTextCard = styled.div`
  display: flex;
  align-items: center;
`
export const NumCard = styled.div`
  font-size: 32px;
  font-weight: 300;
  line-height: 35.19px;
  text-align: left;
  margin-right: 8px;
`
export const Texte = styled.div`
  font-size: 17.06px;
  font-weight: 300;
  line-height: 18.77px;
`

// STYLE HOTEL CONTENU

export const DivContentCardHotel = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  margin-top: 25px;
  margin-left: 6px;
`;

export const CardHotel = styled.div`
  display: flex;
  flex-direction: column;
  width: 245px;
  height: 290px;
  top: 225px;
  left: 411px;
  gap: 0px;
  border-radius: 13.65px;
  opacity: 0px;
  background: #FFFFFF;
`;

export const DivImage = styled.div`
  width: 245px;
  height: 180px;
  top: 225px;
  left: 411px;
  gap: 0px;
  border-radius: 13px 13px 0px 0px;
  opacity: 0px;
  background: ${props => props.background ? `url(${props.background})` : `url("")`};
`;

export const SpanHotel = styled.span`
  font-size: 10.6px;
  font-weight: 400;
  line-height: 15.35px;
  text-align: left;
  color: #8D4B38;
  margin: 15px;
  margin-bottom: 0;
`;

export const NomHotel = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 15.35px;
  text-align: left;
  color: #222222;
  margin-left: 15px;
`;

export const PrixHotel = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 15.35px;
  text-align: left;
  color: #222222;
  margin: 15px;
`;

// STYLE FORMULAIRE

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`
export const FormLog = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 20px;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  background: white;
`
export const TitleLog = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 34.17px;
  text-align: left;
  text-transform: uppercase;
`
export const InputLog = styled.input`
  margin-bottom: 15px;
  height: 50px;
  left: 51px;
  gap: 0px;
  border: none;
  background: none;
  border-bottom: 1px solid #55595C;
  color: #55595C;
  font-size: 18px;
  outline: none;
`
export const InputCheckbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 6px;
`
export const Mdp = styled.a`
  font-size: 18.67px;
  font-weight: 600;
  color: #FFD964;
`
export const Span = styled.span`
  color: #FFFFFF;
`
export const TitleForm = styled.span`
  margin-top: 50px;
  font-size: 26px;
  color: #FFFFFF;
`

export const BtnLink = styled.button`
  font-size: 18.67px;
  font-weight: 600;
  color: #FFD964;
  border: none;
  background: none;
  cursor: pointer;
`