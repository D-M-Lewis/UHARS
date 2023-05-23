import { useState, useEffect } from 'react'
import axios from 'axios'
import LoadingScreen from '../components/LoadingScreen'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const Lost = () => {
    const [loading, setLoading] = useState(true)
    const [lost, setLost] = useState(null)

    const endpoint = `${baseUrl}/lostnfound?_embed`

    useEffect(() => {
        axios.get(`${endpoint}`)
            .then((res) => {
                setLost(res.data)
                // const loader = setTimeout(() => setLoading(false), 2000)
                setLoading(false)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className='lost-main-container'>
            <h2>Cats: Lost and found</h2>
            <div id="homeCont">
                {loading ? <LoadingScreen /> : <LostnFoundList lost={lost} />}
            </div>
        </div>
    )
}

const LostnFoundList = ({ lost }) => {
    const mappedLost = lost.map((lost, index) => {
        function getFeaturedImage(lost) {
            if (lost && lost._embedded && lost._embedded['wp:featuredmedia'] && lost._embedded['wp:featuredmedia']['0'].source_url) {
                return lost._embedded['wp:featuredmedia'][0].source_url;
            } else {
                return 'https://via.placeholder.com/150'
            }
        }

        return (
            <>
                <div className="lost-container">
                    <div className='individual--card' key={lost.slug + "-" + index} >
                        <img src={getFeaturedImage(lost)} alt="Post Featured Image" />
                        <h4 className="title">{lost.title.rendered}</h4>
                        <div dangerouslySetInnerHTML={{ __html: lost.content.rendered }} />
                    </div>
                </div>
            </>
        )
    })



    return (
        <>
            {mappedLost}
        </>
    )
}

export default Lost