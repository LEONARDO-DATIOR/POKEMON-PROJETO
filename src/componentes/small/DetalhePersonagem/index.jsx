import styles from "./detalhepersonagem.module.css"

const DetalhePersonagem = ({isOpen, personagem, isClose}) => {
    return (
        <>
            {isOpen ?
                <div className={styles.modalPersonagem}>
                    <div>
                        <h3>{personagem.name}</h3>
                        <img src={personagem.image} alt="" />
                        <button onClick={isClose}>
                            Dedcline
                        </button>
                    </div>
                </div>
                :
                <></>
            }
        </>
    )
}

export default DetalhePersonagem;