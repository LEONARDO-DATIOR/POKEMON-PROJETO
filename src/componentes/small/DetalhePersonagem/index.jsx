import styles from "./detalhepersonagem.module.css"

const DetalhePersonagem = ({isOpen, personagem, isClose}) => {
    return (
        <>
            {isOpen ?
                <div className={styles.modalPersonagem}>
                    <h3>{personagem.name}</h3>
                    <button onClick={isClose}>
                        Dedcline
                    </button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A aut quis unde beatae atque, dolore harum expedita hic pariatur odio nostrum voluptates molestiae assumenda, accusamus enim saepe omnis, autem nemo.</p>
                </div>
                :
                <></>
            }
        </>
    )
}

export default DetalhePersonagem;