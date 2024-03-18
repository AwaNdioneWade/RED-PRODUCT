'use client'

import styled from 'styled-components';
import { MdDashboard } from "react-icons/md";
import { SlScreenDesktop } from "react-icons/sl";
import { render } from 'react-dom';

const Container = styled.div`
display: flex;
margin: 0;
padding: 0;
background: #F0F0F0;
`;
const Gauche = styled.div`
background: #55595C;
width: 364px;
height: 1166px;
color: white;
padding: 10px
`;

const Droit = styled.div`
width: 1556px;
height: 75px;
`;

const DivCrud = styled.div`
  display: flex;
  margin-top: 20px;
`

const Bar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background: #FFFFFF;
height: 75px;
border-bottom: 1px solid #F0F0F0;
`;

const Title = styled.p`
margin-top: 30px;
margin-bottom: 30px;
font-weight: 700;
font-size: 24px;
`

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 362px;
  height: 106px;
  border-radius: 14px; 
  background: #FFFFFF;
  margin-top: 31px;
`

const DivCard = styled.div`
  display: flex; 
  gap: 20px;
  margin-left: 20px;
`

const TextCard = styled.div`
  display: flex; 
  flex-direction: column;
`

const InputBar = styled.input`
text-align: end;
width: 279.96px;
height: 33.99px;
border-radius: 22.06px;  
`

export default function Home() {


  return (
      <Container>
        <PartieGauche />
        <Droit>
          <Bar>
            <h3>Dashboard</h3>
            <div>
              <InputBar />
            </div>
          </Bar>
          <Bar>
            <h4>Bienvenue sur RedProduct</h4>
          </Bar>
          <DivCard>
            <Card>
              <TextCard>
                <p>125 Formulaire</p>
                <span>Je ne sais pas quoi mettre</span>
              </TextCard>
            </Card>
            <Card>
              <TextCard>
                <p>40 Messages</p>
                <span>Je ne sais pas quoi mettre</span>
              </TextCard>
            </Card>
            <Card>
              <TextCard>
                <p>600 Utilisateurs</p>
                <span>Je ne sais pas quoi mettre</span>
              </TextCard>
            </Card>
          </DivCard>
          <DivCard>
            <Card>
              <TextCard>
                <p>25 E-mails</p>
                <span>Je ne sais pas quoi mettre</span>
              </TextCard>
            </Card>
            <Card>
              <TextCard>
                <p>40 Hotels</p>
                <span>Je ne sais pas quoi mettre</span>
              </TextCard>
            </Card>
            <Card>
            <TextCard>
              <p>02 Entités</p>
              <span>Je ne sais pas quoi mettre</span>
            </TextCard>
            </Card>
          </DivCard>
        </Droit>
      </Container>
  );
}


const PartieGauche = () =>{
  return(    
    <Gauche>
      <Title>RED PRODUCT</Title>
      <p>Principal</p>
      <DivCrud>
        <MdDashboard />
        <h4>Dashboard</h4>
      </DivCrud>
      <DivCrud>
        <SlScreenDesktop />
        <h4>Liste Hotels</h4>
    </DivCrud>
    </Gauche>
  )
}