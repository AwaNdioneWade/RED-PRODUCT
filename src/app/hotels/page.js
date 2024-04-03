"use client"
import { useContext, useEffect, useState } from "react";
import { CardHotel, DivContentCardHotel, DivImage, NomHotel, PrixHotel, SpanHotel } from "../../pages/style";
import PageAccueil from "../../pages/admin";
import { HotelContext } from "../../pages/hotelprovider";

const HotelsContenu = () => {
  const [hotels, setHotels] = useState([])
  const {filtreHotels} = useContext(HotelContext)
  useEffect(()=>{
    setHotels(filtreHotels)
  }, [filtreHotels])

    return (
      <PageAccueil>      
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
      </PageAccueil>
    );
  }
  export default HotelsContenu;