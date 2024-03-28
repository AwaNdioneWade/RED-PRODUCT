import { useEffect, useState } from "react";
import { BackgroundContainer, CardHotel, DivContentCardHotel, DivImage, NomHotel, PrixHotel, SpanHotel } from "./style";
const axios = require('axios');

const HotelsContenu = () => {

  const [hotels, setHotels] = useState([])

  const getAllHotels = async () => {
    try {
      const response = await axios.get('http://localhost:4000/hotels');
      const recupHotesl = response.data
      setHotels(recupHotesl)
      console.log(response.data);
      console.log({hotels});
      return response.data; // Les données des hôtels sont renvoyées si la requête réussit
    } catch (error) {
      console.error('Erreur lors de la récupération des hôtels :', error);
      throw error; // En cas d'erreur, elle est renvoyée pour être traitée par l'appelant
    }
  };
  useEffect(()=>{
    getAllHotels()
  }, [hotels])
    return (
      <>      
        <DivContentCardHotel>
          {hotels.map((hotel, index)=>(
              <CardHotel key={index}>
                <DivImage background= {hotel.imageHotel}/>
                <SpanHotel>{hotel.adresse}</SpanHotel>
                <NomHotel>{hotel.nom}</NomHotel>
                <PrixHotel>{hotel.prix} {hotel.devise} par nuit</PrixHotel>
              </CardHotel>
            
          ))}
        </DivContentCardHotel>
      </>
    );
  }
  export default HotelsContenu;