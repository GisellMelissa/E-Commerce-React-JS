import { IconContext } from "react-icons";
import { FiShoppingCart } from 'react-icons/fi';
import { useContext } from "react";
import CartContext from "../cart-context/cart-context";

export const CartWidget = () => {
    const { countCart } = useContext(CartContext.Consumer);
     

    return (
        <a href="/cart">
            <div className='shopping-cart'>
                <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                    <FiShoppingCart /><span className='shopping-cart-quantity'>{countCart}</span>
                </IconContext.Provider>
            </div>
        </a>
    )
}