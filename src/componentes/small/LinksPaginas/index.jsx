    import { Link } from "react-router"
    import style from "./linkspaginas.module.css"

    export const LinksPaginas = () => {
        return (
            <ul className={style.lista}>
                <li>
                    <Link to="/">Personagens</Link>
                </li>
                <li>
                    <Link to="Magias">Magias</Link>

                </li>
            </ul>
        )
    }