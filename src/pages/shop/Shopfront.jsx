import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import LoadingScreen from '../../components/LoadingScreen';

//Products URL
const productsUrl = import.meta.env.VITE_WC_PRODUCTS_URL;

const Shopfront = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);

    //useEffect for axios call
    useEffect(() => {
        axios.get(`${productsUrl}`)
            .then((res) => {
                setProducts(res.data)
                setLoading(false)
            })
            .catch((err) => console.log(err))
    }, [])

    const Products = ({ products }) => {
        const mappedProducts = products.map((product, index) => {
            function getFeaturedImage(product) {
                if (product && product.images && product.images[0]) {
                    return product.images[0].src;
                } else {
                    return 'https://via.placeholder.com/150';
                }
            }
            //return for the map
            return (
                <div className='product-container item-container' key={index}>
                    <div className='product-card'>
                        <img className='product-Image' src={getFeaturedImage(product)} alt="Product Image" />
                        <Link className='product-link' to={`/product/${product.id}`}>
                            <h4 className="name">{product.name}</h4>
                        </Link>
                    </div>
                </div>
            )
        })
        // Products return
        return (
            <>
                {mappedProducts}
            </>
        )
    }

    //ShopFront return
    return (
        <div id="shop-page" className='container'>
            <div className="shop-page-container">
                <h2>DONATE</h2>
                <div id='product-grid' className='grid-container'>
                    {loading ? <LoadingScreen /> : <Products products={products} />}
                </div>
            </div>
        </div>
    )
}

export default Shopfront