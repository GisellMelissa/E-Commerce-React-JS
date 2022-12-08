import { CartWidget } from "./cart-widget";
import Logo from "../../assets/Logo-Oasis-Literario2.png";

export const Navbar = () => {
    return (
        <>
    <header>
        <div className="logo-container">
            <a href="/"><img src={Logo} alt="" /></a>
        </div>
        <nav className="navigation">
            <ul className="navigation-bar">
                <li className="navigation-bar-item">
                    <a href="/">Inicio</a>
                </li>
                <li className="navigation-bar-item">
                    <a href="/catalogo">Libros</a>
                    <ul className="item-book">
                        <li className="item"><a href="/novelas">Novelas</a></li>
                        <li className="item"><a href="/poeticos">Poéticos</a></li>
                        <li className="item"><a href="/superación-personal">Superación Personal</a></li>
                        <li className="item"><a href="/cientificos">Científicos</a></li>
                        <li className="item"><a href="/academicos">Académicos</a></li>
                    </ul>
                </li>
                <li className="navigation-bar-item">
                    <a href="/ofertas">Lo Más Vendido</a>
                </li>
            </ul>
            <CartWidget />
        </nav>
    </header>
           
        </>
    )
}