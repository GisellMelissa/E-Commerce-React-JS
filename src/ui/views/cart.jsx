import { useState, useEffect} from 'react';

export const Cart = () => {
    const [products, setProducts] = useState([]);
    const [totalCost, setTotalCost] = useState(null);
    
    let formatting_options = {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
    }

    const colombianPesosString = new Intl.NumberFormat("es-CO", formatting_options);
    
    useEffect(() => {

        if(localStorage.getItem('cart-products')) {
            const productsOnStorage = JSON.parse(localStorage.getItem('cart-products'));
            setProducts(productsOnStorage);
            const totalAmount = productsOnStorage.reduce((total, currentProduct) => {
                console.log(total);
                return total + currentProduct.price;
            }, 0);
            setTotalCost(totalAmount);
        }
    }, [])
    return (
        <div id="invoiceholder">
            <div id="invoice" className="effect2">
                <div id="invoice-bot">
                
                    <div id="table">
                        <table>
                            <tr className="tabletitle">
                                <td className="item"><h2>Producto</h2></td>
                                <td className="Hours"><h2>Cantidad</h2></td>
                                <td className="Rate"><h2>Precio</h2></td>
                                <td className="subtotal"><h2>Subtotal</h2></td>
                            </tr>
                            {products.length > 0 ? products.map((product, index) => (
                                <tr key={index} className="service">
                                    <td className="tableitem"><p className="itemtext">{product.title}</p></td>
                                    <td className="tableitem"><p className="itemtext">1</p></td>
                                    <td className="tableitem"><p className="itemtext">{colombianPesosString.format(product.price)}</p></td>
                                    <td className="tableitem"><p className="itemtext">{colombianPesosString.format(product.price * 1)}</p></td>
                                </tr>                                                           
                            )) : (
                                <tr className="service">
                                    no hay nada
                                </tr>                   
                            )}
                                
                            <tr className="tabletitle">
                                <td></td>
                                <td></td>
                                <td className="Rate"><h2>Total</h2></td>
                                <td className="payment"><h2>{colombianPesosString.format(totalCost)}</h2></td>
                            </tr>
                        
                        </table>
                    </div>
                
                </div>
            </div>
        </div>
    );
}