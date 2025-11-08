import DetalhePersonagem from "../../small/DetalhePersonagem";
import Personagem from "../../small/Personagem";
import styles from "./personagens.module.css"
import { useState } from 'react';

const Personagens = ({listaPersonagens}) => {
    const [open, setOpen] = useState(false);
    const [personagemSelecionado, setPersonagemSelecioando] = useState({});

    const abrirModal = (personagem) => {
        setOpen(true);
        setPersonagemSelecioando(personagem)
    }

    const fecharModal = () => {
        setOpen(false);
    }

    return (
        <section className={styles.sectionPersonagens}>
            <div className={styles.divPersonagens}>
                {
                    listaPersonagens.map((personagem, index) => {
                        return (
                            <>
                                {
                                    personagem.actor && personagem.image ?
                                    <Personagem key={index} onClick={() => {abrirModal(personagem)}} nome={personagem.name} imagem={personagem.image} ator={personagem.actor}></Personagem>                                        
                                    :
                                    ""
                                }
                            </>
                        );
                    })
                }
                <DetalhePersonagem isOpen={open} isClose={fecharModal} personagem={personagemSelecionado}></DetalhePersonagem>
            </div>
        </section>
    )
}

export default Personagens;