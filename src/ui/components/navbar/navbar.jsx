import { CartWidget } from "./cart-widget";
import Logo from "../../assets/Logo-Oasis-Literario2.png";

export const Navbar = () => {
    return (
        <>
    <header>
        <div className="logo-container">
            <img src={Logo} alt="" />
        </div>
        <nav className="navigation">
            <ul className="navigation-bar">
                <li className="navigation-bar-item">
                    <a href="/">Inicio</a>
                </li>
                <li className="navigation-bar-item">
                    <a href="/">Libros</a>
                    <ul className="item-book">
                        <li className="item"><a href="/">Novelas</a></li>
                        <li className="item"><a href="/">Poéticos</a></li>
                        <li className="item"><a href="/">Aventura</a></li>
                        <li className="item"><a href="/">Superación Personal</a></li>
                        <li className="item"><a href="/">Científicos</a></li>
                        <li className="item"><a href="/">Académicos</a></li>
                    </ul>
                </li>
                <li className="navigation-bar-item">
                    <a href="/">Revistas</a>
                    <ul className="item-magazine">
                        <li className="item"><a href="/">Entretenimiento</a></li>
                        <li className="item"><a href="/">Académicas</a></li>
                        <li className="item"><a href="/">Farándula</a></li>
                        <li className="item"><a href="/">Negocios</a></li>
                    </ul>
                </li>
                <li className="navigation-bar-item">
                    <a href="/">Lo Más Vendido</a>
                </li>
                <li className="navigation-bar-item">
                    <a href="/">Contacto</a>
                </li>
            </ul>
            <CartWidget />
        </nav>
    </header>
           
        </>
    )
}