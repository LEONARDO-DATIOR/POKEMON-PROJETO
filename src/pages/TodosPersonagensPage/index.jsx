import Personagens from "../../componentes/big/Personagens"
import { useEffect } from 'react';
import { useState } from 'react';

export const TodosPersonagensPage = () => {
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
            <Personagens listaPersonagens={personagensHP}/>
        </>
    )
}