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
                    <a href="/catalogo">Libros Categorías</a>
                    <ul className="item-book">
                        <li className="item"><a href="/category/jcU1waffiR3Hn73Q6i09">Novelas</a></li>
                        <li className="item"><a href="/category/i4aK4SzIDFuQwHGXgnMM">Poesía</a></li>
                        <li className="item"><a href="/category/aZfpqR7XVOConLE8c0m6">Superación Personal</a></li>
                        <li className="item"><a href="/category/G6IuLfUYNkKkQgXFgjEj">Educativos</a></li>
                        <li className="item"><a href="/category/JUlwjlPj4tNYDWzeDkAE">Cuentos</a></li>
                    </ul>
                </li>
            </ul>
            <CartWidget />
        </nav>
    </header>
           
        </>
    )
}