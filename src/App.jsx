import { useEffect, useState } from "react";

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
      <h1>Todos os personagens: </h1>
      {
        personagensHP.map((personagens, index) => {
          return (
            <>
            {
              personagens.actor ?
              <div key={index} >
                <h2 >{personagens.name}</h2>
                {personagens.imagem ? <></> : <img  src={personagens.image} alt="" /> }
                <p>{personagens.actor}</p>
              </div>
              :
              ""
            }
            </>
          );
        })
      }
    </>
  );
}

export default Pokedex;
