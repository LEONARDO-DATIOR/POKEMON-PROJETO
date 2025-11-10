import style from "./magias.module.css"

export const Magias = ({magias}) => {
    return (
        <section className={style.magiasSection}>
            {magias.map((magia) => {
                return (
                    <div key={magia.id} className={style.magia} >
                        <h2>{magia.name}</h2>
                        <p>{magia.description}</p>
                    </div>
                )
            })}
        </section>
    )
}