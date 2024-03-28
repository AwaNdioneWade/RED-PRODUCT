import { AlignEnd, ButtonInscrire, ContainerInputImg, DefaultImage, DisplayRow, Form, ImageInput, Input, Label, LabelInput, PreviewImage, Select, TexteBouton, TexteInputImg } from "./style";
import React, { useState, useRef } from 'react';
const axios = require('axios');

const Formulaire = ({ onClose }) => {
  const [nom, setNom] = useState(''); 
  const [adresse, setAdresse] = useState('');
  const [email, setEmail] = useState('');
  const [numero, setNumero] = useState('');
  const [prix, setPrix] = useState('');
  const [devise, setDevise] = useState('fxof');
  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleTextClick = () => {
    inputRef.current.click();
  };

  // Ajout Hotel
  const submitHotel = async () => {
    try {
      const formData = new FormData();
      formData.append('nom', nom);
      formData.append('adresse', adresse);
      formData.append('email', email);
      formData.append('numero', numero);
      formData.append('prix', prix);
      formData.append('devise', devise);
      formData.append('imageHotel', selectedImage); 

      const response = await axios.post('http://localhost:4000/hotels', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status >= 200 && response.status < 300) {
        // La requête a réussi, traitement de la réponse
        alert('yes');
        console.log('Hôtel ajouté avec succès :', response.data);
      } else {
        // La requête a échoué, traitement de l'erreur
        alert('no');
        console.error('Erreur lors de l\'ajout de l\'hôtel :', response.statusText);
      }
    } catch (error) {
      // Erreur lors de l'exécution de la requête
      alert('no');
      console.error('Erreur lors de l\'ajout de l\'hôtel :', error);
    } finally {
      onClose();
    }
  };

  return (
    <Form>
      <DisplayRow>
        <LabelInput>
          <Label>Nom de l&apos;hotel</Label>
          <Input value={nom} onChange={(e) => setNom(e.target.value)} />
        </LabelInput>
        <LabelInput>
          <Label>Adresse</Label>
          <Input value={adresse} onChange={(e) => setAdresse(e.target.value)} />
        </LabelInput>
      </DisplayRow>
      <DisplayRow>
        <LabelInput>
          <Label>E-mail</Label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </LabelInput>
        <LabelInput>
          <Label>Numéro de téléphone</Label>
          <Input value={numero} onChange={(e) => setNumero(e.target.value)} />
        </LabelInput>
      </DisplayRow>
      <DisplayRow>
        <LabelInput>
          <Label>Prix par nuit</Label>
          <Input value={prix} onChange={(e) => setPrix(e.target.value)} />
        </LabelInput>
        <LabelInput>
          <Label>Devise</Label>
          <Select value={devise} onChange={(e) => setDevise(e.target.value)}>
            <option value="fxof">F XOF</option>
            <option value="euro">Euro</option>
            <option value="dollar">Dollar</option>
          </Select>
        </LabelInput>
      </DisplayRow>
      <LabelInput>
        <Label>Ajouter une photo</Label>
        <ContainerInputImg>
          <ImageInput
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={inputRef}
          />
          {selectedImage ? (
            <PreviewImage onClick={handleTextClick} src={selectedImage} alt="Selected Image" />
          ) : (
            <DefaultImage onClick={handleTextClick}>
              <TexteInputImg>Ajouter une photo</TexteInputImg>
            </DefaultImage>
          )}
        </ContainerInputImg>
      </LabelInput>
      <AlignEnd>
        <ButtonInscrire onClick={() => submitHotel()}><TexteBouton>Enregistrer</TexteBouton></ButtonInscrire>
      </AlignEnd>
    </Form>
  );
};

export default Formulaire;
