import { ProductList } from "../components/products/product-list"

export const Home = () => {
    return (
        <>
            <div>Esto es el home</div>
            <ProductList greeting={'hola mundo'} />
        </>
    )
}