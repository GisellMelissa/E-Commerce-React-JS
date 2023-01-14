import React from 'react';
import useCartState from './use-cart-state/use-cart-state';

const { createContext } = React;

const Context = createContext({});

const CartContext = ({ children }) => {
    const cartState = useCartState();

    return (
        <Context.Provider value={cartState}>
            {children}
        </Context.Provider>
    );
}

export default {
    Provider: CartContext,
    Consumer: Context,
};