import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const ProductDetails = () => {
    const initialState = {title: '', pictures: [], price: 0, description: ''};
    const [currentProduct, setCurrentProduct] = useState(initialState);

    const productId = useParams().id;

    useEffect(() => {
        fetch(`https://api.mercadolibre.com/items/${productId}`, {
            method: 'GET'
        })
        .then((res) => res.json())
        .then((res) => {
            setCurrentProduct(res);
            console.log(res);
        }).catch((error) => {
            console.error(error);
        });

    }, []);

    return (
        <>
            <div className="img-details-products"><img src={currentProduct.pictures && currentProduct.pictures.length > 0 && currentProduct.pictures[0].url} /></div>
            <div className="title-details-products">Nombre: {currentProduct.title}</div>
            <div className="price-details-products">Precio: {currentProduct.price}</div>
            <div className="description-products">Descripción: {currentProduct.description}</div>
        </>
    );
}