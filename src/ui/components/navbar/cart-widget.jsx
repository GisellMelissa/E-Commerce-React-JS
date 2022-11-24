import { IconContext } from "react-icons";
import { FiShoppingCart } from 'react-icons/fi';

export const CartWidget = () => {
    return (
        <div className='shopping-cart'>
            <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                <FiShoppingCart /><span className='shopping-cart-quantity'>0</span>
            </IconContext.Provider>
        </div>
    )
}