import { HiOutlineMailOpen } from 'react-icons/hi';
import { FaUsers } from 'react-icons/fa';
import { FaWpforms } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";
import { RiHotelFill } from "react-icons/ri";
import { GiBackup } from "react-icons/gi";import {  DivDashboardContenu, Card, DivCard, DivCardIcone, NumCard, NumTextCard, TextCard, Texte } from "./style";

const DashboardContenu = () => {
    return (   
      <DivDashboardContenu>
        <DivCard>
          <Card>
            <DivCardIcone background="#A88ADD" ><FaWpforms /></DivCardIcone>
            <TextCard>
              <NumTextCard>
                <NumCard>125</NumCard>
                <Texte>Formulaire</Texte>
              </NumTextCard>
              <Texte>Je ne sais pas quoi mettre</Texte>
            </TextCard>
          </Card>
          <Card>
            <DivCardIcone background="#0CC2AA" ><LuMessagesSquare /></DivCardIcone>
            <TextCard>
              <NumTextCard>
                <NumCard>40 </NumCard>
                <Texte>Messages</Texte>
              </NumTextCard>
              <Texte>Je ne sais pas quoi mettre</Texte>
            </TextCard>
          </Card>
          <Card>
            <DivCardIcone background="#FCC100" ><FaUsers /></DivCardIcone>
            <TextCard>
              <NumTextCard>                
                <NumCard>600</NumCard>
                <Texte>Utilisateurs</Texte>
              </NumTextCard>
              <Texte>Je ne sais pas quoi mettre</Texte>
            </TextCard>
          </Card>
          <Card>
            <DivCardIcone background="#F90000" ><HiOutlineMailOpen /></DivCardIcone>
            <TextCard>
              <NumTextCard>
                <NumCard>25</NumCard>
                <Texte>E-mails</Texte>
              </NumTextCard>
              <Texte>Je ne sais pas quoi mettre</Texte>
            </TextCard>
          </Card>
          <Card>
            <DivCardIcone background="#9C27B0" ><RiHotelFill /></DivCardIcone>
            <TextCard>
              <NumTextCard>
                <NumCard>40</NumCard>
                <Texte>Hotels</Texte>
              </NumTextCard>
              <Texte>Je ne sais pas quoi mettre</Texte>
            </TextCard>
          </Card>
          <Card>
            <DivCardIcone background="#1565C0" ><GiBackup /></DivCardIcone>
          <TextCard>
            <NumTextCard>
              <NumCard>02</NumCard>
              <Texte>Entités</Texte>
            </NumTextCard>
            <Texte>Je ne sais pas quoi mettre</Texte>
          </TextCard>
          </Card>
        </DivCard>
      </DivDashboardContenu>
    );
  };
  export default DashboardContenu;