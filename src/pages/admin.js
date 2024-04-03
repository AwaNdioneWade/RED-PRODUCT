import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PartieGauche from "./partieGauche";
import PartieDroite from "./partieDroite";
import DashboardContenu from "./dashboard";
import { HotelProvider } from "./hotelprovider"
import { Container } from "./style";
const axios = require("axios");

const PageAccueil = ({children}) => {
    const [selectedItem, setSelectedItem] = useState("");

    const [isOpen, setIsOpen] = useState(true);
    const [Open, setOpen] = useState(false);
    
    const handleClickBurger = () => {
      setIsOpen(!isOpen);
      setOpen(!Open);
    };
  
    const router = useRouter();
    // useEffect(()=>{
    //   router.push(`/${selectedItem}`)
    // }, [])

    const handleClick = (item) => {
      setSelectedItem(item);
      router.push(`/${item}`)
      console.log(item)
    };
    
    // const [valueSearch, setValueSearch] = useState("");
    // const [hotels, setHotels] = useState([])
  
    // const fetchAllHotels = async () => {
    //   try {
    //     const response = await axios.get("https://red-product-api-rn66.onrender.com/hotels");
    //     const recupHotesl = response.data
    //     setHotels(recupHotesl)
    //     console.log(response.data);
    //     console.log({hotels});
    //     return response.data; // Les données des hôtels sont renvoyées si la requête réussit
    //   } catch (error) {
    //     console.error("Erreur lors de la récupération des hôtels :", error);
    //     throw error; 
    //   }
    // };
    // useEffect(()=>{
    //   fetchAllHotels()
    // }, [hotels])

    // const filtreHotels = hotels.filter((hotel) => 
    // hotel.nom.toLowerCase().includes(valueSearch.toLowerCase())
    // )

 
    return(
      <Container>
        <PartieGauche handleClickBurger={handleClickBurger} Open={Open} isOpen={isOpen} selectedItem={selectedItem} onItemClick={handleClick} />
            {/* {(selectedItem === "" || selectedItem === "dashboard" || selectedItem === "hotels") && (
                <PartieGauche handleClickBurger={handleClickBurger} Open={Open} isOpen={isOpen} token={token} setToken={setToken} selectedItem={selectedItem} onItemClick={handleClick} />
            )} */}
            <HotelProvider>
              <PartieDroite children={children} handleClickBurger={handleClickBurger} isOpen={isOpen} setIsOpen={setIsOpen} selectedItem={selectedItem} >
                
              </PartieDroite>               
            </HotelProvider>
          {/* {selectedItem === "" && <DashboardContenu />}
          {selectedItem === "dashboard" && <DashboardContenu />}
          {selectedItem === "hotels" && <HotelsContenu filtreHotels={filtreHotels} />}
          */}
      </Container>
    )
  }

  export default PageAccueil;