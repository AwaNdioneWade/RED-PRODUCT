import { useEffect, useState } from "react";
import { CardHotel, DivContentCardHotel, DivImage, NomHotel, PrixHotel, SpanHotel } from "./style";

const HotelsContenu = ({ filtreHotels, hotelsFiltred }) => {
  const [hotels, setHotels] = useState([])
  
  useEffect(()=>{
    setHotels(filtreHotels)
  }, [hotels])

    return (
      <>      
        <DivContentCardHotel>
          {hotelsFiltred.map((hotel, index)=>(
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