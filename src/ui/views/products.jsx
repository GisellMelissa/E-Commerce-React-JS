import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Products = () => {
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();
    
    useEffect(() => {
        if(products.length === 0) {
            fetch('https://api.mercadolibre.com/sites/MLA/search?q=libros', {
                method: 'GET'
            }).then((res) => {
                return res.json();
            }).then((res) => {
                setProducts(res.results);
                console.log(products);
                console.log('res',res);
            }).catch((error) => {
                console.log(error);
            });
        }
    }, []);

    const handleClick = (productId) => {
        console.log(productId);
        navigate(`/product/${productId}`);
    }

    return (<> 
        <h2 className="title-results">Todos los resultados</h2>
                <ul className="card-products">
                {   
                    products.map((product) => (
                        <li className="item-card" key={product.id}>
                            <div>
                            <img className="img-products" src={product.thumbnail} /> 
                                <div className="title-products">{product.title}</div>
                                <div className="price-products">$ {product.price}</div>
                            </div>
                            <button className="button-details" onClick={() => handleClick(product.id)}>Ver detalles del producto</button>
                            <button className="add-cart">Añadir al carrito</button>
                        </li>
                    ))
                }
                </ul>
            </>
    );
}