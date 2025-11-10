import { useEffect, useState } from "react";
import { Header } from "../../componentes/big/Header"
import { Magias } from "../../componentes/big/Magias";

export const TodasMagias = () => {

    const [magiasHP, setmagiasHP] = useState([]);


    useEffect(() => {
        const fetchPersonagensHP = async () => {
            const magiasApi = await fetch('https://hp-api.onrender.com/api/spells')
            const data = await magiasApi.json()
            setmagiasHP(data)
        }

        fetchPersonagensHP();
    }); 

    return (
        <>
            <Header />
            <Magias magias={magiasHP}/>
        </>
    )
}