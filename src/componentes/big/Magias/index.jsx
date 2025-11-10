import style from "./magias.module.css"

export const Magias = ({magias}) => {
    return (
        <section className={style.magiasSection}>
            {magias.map((magia) => {
                return (
                    <div key={magia.id} className={style.magia} >
                        <h2>{magia.name}</h2>
                        <h2>{magia.description}</h2>
                    </div>
                )
            })}
        </section>
    )
}