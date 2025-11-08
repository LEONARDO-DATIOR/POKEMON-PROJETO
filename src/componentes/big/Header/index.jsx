import { Link } from "react-router"
import { LinksPaginas } from "../../small/LinksPaginas"
import style from "./header.module.css"


export const Header = () => {
    return (
        <header className={style.header}>
            <LinksPaginas />
        </header>
    )
}