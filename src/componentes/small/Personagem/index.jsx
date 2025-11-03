import styles from "./personagem.module.css"

const Personagem = ({nome, imagem, ator, ...props}) => {
    return (
        <>
            <div className={styles.personagem} {...props}>
                <h2 >{nome}</h2>
                {imagem ? <img  src={imagem} alt="" /> : <></>  }
                <p>{ator}</p>
            </div>
        </>
    )
}

export default Personagem;