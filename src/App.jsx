import { useEffect, useState } from "react";
import Personagens from "./componentes/big/Personagens";

function Pokedex() {
  const [personagensHP, setpersonagensHP] = useState([]);


  useEffect(() => {
    const fetchPersonagensHP = async () => {
      const personagensAPI = await fetch('https://hp-api.onrender.com/api/characters')
      const data = await personagensAPI.json()
      setpersonagensHP(data)
    }

    fetchPersonagensHP();
  }); 


  return (
    <>
      <Personagens listaPersonagens={personagensHP}></Personagens>
    </>
  );
}

export default Pokedex;
