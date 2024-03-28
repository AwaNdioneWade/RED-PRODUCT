import Formulaire from "./formulaire";
import { ModalContent, ModalWrapper, TexteBack } from "./style";
import { IoMdArrowRoundBack } from "react-icons/io";

const Modal = ({ show, onClose }) => {
    return (
      <ModalWrapper show={show}>
        <ModalContent>
          <TexteBack>
              <IoMdArrowRoundBack onClick={onClose}/> Créer un nouveau hotel
          </TexteBack>
          <Formulaire onClose={onClose} />
        </ModalContent>
      </ModalWrapper>
    );
  };
  export default Modal;