import { CardHotel, DivContentCardHotel, DivImage, NomHotel, PrixHotel, SpanHotel } from "./style";

const HotelsContenu = ({ filtreHotels }) => {


    return (
      <>      
        <DivContentCardHotel>
          {filtreHotels.map((hotel, index)=>(
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