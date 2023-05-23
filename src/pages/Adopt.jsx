import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import LoadingScreen from '../components/LoadingScreen'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const Adopt = () => {
    const [loading, setLoading] = useState(true)
    const [adopt, setAdopt] = useState(null)

    const endpoint = `${baseUrl}/adoption?_embed`

    useEffect(() => {
        axios.get(`${endpoint}`)
            .then((res) => {
                setAdopt(res.data)
                // const loader = setTimeout(() => setLoading(false), 2000)
                setLoading(false)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className='adoption-main-container'>
            <h2>Cats looking for people:</h2>
            <div id="homeCont">
                {loading ? <LoadingScreen /> : <AdoptionList adopt={adopt} />}
            </div>
        </div>
    )
}

const AdoptionList = ({ adopt }) => {
    const mappedAdopt = adopt.map((adopt, index) => {
        function getFeaturedImage(adopt) {
            if (adopt && adopt._embedded && adopt._embedded['wp:featuredmedia'] && adopt._embedded['wp:featuredmedia']['0'].source_url) {
                return adopt._embedded['wp:featuredmedia'][0].source_url;
            } else {
                return 'https://via.placeholder.com/150'
            }
        }
        return (
            <React.Fragment key={adopt.slug + "-" + index}>
                <div className="adoption-container" >
                    <div className='individual--card'>
                        <img src={getFeaturedImage(adopt)} alt="Post Featured Image" />
                        <h4 className="title">{adopt.title.rendered}</h4>
                        <div dangerouslySetInnerHTML={{ __html: adopt.content.rendered }} />
                    </div>
                </div>
            </React.Fragment>
        )
    })

    return (
        <>
            {mappedAdopt}
        </>
    )
}

export default Adopt