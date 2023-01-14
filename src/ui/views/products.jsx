import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import app from "./../config/firebase";
import CartContext from "../components/cart-context/cart-context";

export const Products = () => {
    const [products, setProducts] = useState([]);
    const { changeCountCart } = useContext(CartContext.Consumer);
    const navigate = useNavigate();
    const params = useParams();
    let categoryId = null;
    if (params.category) {
        categoryId = params.category;
    }
    
    const getProductList = () => {
        const database = getFirestore(app);
        const productsCollection = collection(database, 'productos');
        let queryData;
        if (categoryId) {
            queryData = query(productsCollection, where('categoryID', '==', categoryId));
        } else {
            queryData = query(productsCollection);
        }
        
        getDocs(queryData).then(res => {
            const resultados = res.docs.map((result) => {
                let resultmap = {...result.data()}
                resultmap.id = result.id;
                return resultmap;
            });
            setProducts(resultados);
        }).catch(error => console.warn(error));
    };
   
    useEffect(() => {
        if(products.length === 0) {
            getProductList();
        }
    }, []);

    const handleClick = (productId) => {
        navigate(`/product/${productId}`);
    }

    const handleAddToCart = (product) => {
        let cartProducts = [];
        if(localStorage.getItem('cart-products')){
            cartProducts = JSON.parse(localStorage.getItem('cart-products'));
        } 
        
        if (Array.isArray(cartProducts)) {
            cartProducts.push(product);
            localStorage.setItem('cart-products', JSON.stringify(cartProducts));
        }   

        changeCountCart(cartProducts.length);
    }

    return (<> 
        <h2 className="title-results">Todos los resultados</h2>
                <ul className="card-products">
                {   
                    products.map((product) => (
                        <li className="item-card" key={product.id}>
                            <div>
                            <img className="img-products" src={product.image} /> 
                                <div className="title-products">{product.title}</div>
                                <div className="price-products">$ {product.price}</div>
                            </div>
                            <button className="button-details" onClick={() => handleClick(product.id)}>Ver detalles del producto</button>
                            <button className="add-cart" onClick={() => handleAddToCart(product)}>Añadir al carrito</button>
                        </li>
                    ))
                }
                </ul>
            </>
    );
}