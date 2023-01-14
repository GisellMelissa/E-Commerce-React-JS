import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import app from "./../config/firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";


export const ProductDetails = () => {
    const initialState = {title: '', author: '', image: [], price: 0, description: ''};
    const [currentProduct, setCurrentProduct] = useState(initialState);
    const productId = useParams().id;

    const getCurrentProduct = (product) => {
        const database = getFirestore(app);
        const productRef = doc(database, 'productos', product);                               
        getDoc(productRef)
            .then((response) => {
                setCurrentProduct(response.data())
            })
            .catch((error) => console.warn(error));
    };

    useEffect(() => {
        getCurrentProduct(productId);
    }, []);

    return (
        <>
            <div className="img-details-products"><img src={currentProduct.image} /></div>
            <div className="details-products"><strong>Nombre: </strong> {currentProduct.title}</div>
            <div className="details-products"><strong>Autor: </strong>{currentProduct.author}</div>
            <div className="price-details-products"><strong>Precio: </strong>{currentProduct.price}</div>
            <div className="details-products"><strong>Descripción: </strong>{currentProduct.description}</div>
            
        </>
    );
}