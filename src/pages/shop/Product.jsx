import { useEffect, useState } from 'react'
import { ArrowLeft } from 'react-bootstrap-icons'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import LoadingScreen from '../../components/LoadingScreen'

//utilities
import AddToCart from './utilities/AddToCart';
import Notification from './utilities/notification';

//Products url
const productsUrl = import.meta.env.VITE_WC_PRODUCTS_URL


const Product = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    // state variables
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [responseReceived, setResponse] = useState(false);
    const [notification, setNotification] = useState("");
    const [buttonStatus, updateButtonStatus] = useState("Add to cart");

    const endpoint = `${productsUrl}/${id}`

    useEffect(() => {
        axios.get(`${endpoint}`)
            .then((res) => {
                setProduct(res.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err);
                setLoading(false)
            })
    }, [endpoint])

    if (loading) {
        return <><LoadingScreen /></>
    }

    return (
        <>
            <div className="container">
                <div className="product-container item-container">
                    <h4 className='name'>{product.name}</h4>
                    <h3>${product.prices.price}</h3>
                </div>
                <div id="product-description"
                    dangerouslySetInnerHTML={{ __html: product.description }} />
                <div id="tools">
                    <button
                        id="add-to-cart-button" className='regular-button'
                        onClick={() => {
                            AddToCart(
                                product.id,
                                setResponse,
                                setNotification,
                                updateButtonStatus
                            )
                        }}
                    >{buttonStatus}</button>
                    {/*custom message for the user when a product is added */}
                    {responseReceived && <Notification type={notification} />}
                    {/*  back button - useNavigate*/}
                    <button onClick={() => navigate(-1)} className='regular-button'><ArrowLeft /> Go Back</button>
                </div>
            </div>
        </>
    )
}

export default Product