import { useState } from 'react';

const useCartState = () => {
    let initialCountCart = 0;
    if (localStorage.getItem('cart-products')) {
        initialCountCart = JSON.parse(localStorage.getItem('cart-products')).length;
    }
    const [countCart, setCountCart] = useState(initialCountCart);

    const changeCountCart = (count) => {
        setCountCart(count);
    }

    return {
        countCart,
        changeCountCart,
    }

}

export default useCartState;