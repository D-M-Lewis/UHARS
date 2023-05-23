import { useState } from 'react'
import { Link } from "react-router-dom"
import { Helmet } from 'react-helmet'

const Home = () => {
    return (
        <>
            <section className='section-hero'>
                <Helmet>
                    <title>UHARS</title>
                    <meta name='description' content='Upper Hutt Animal Rescue Society (UHARS) operates as a shelter that takes in homeless, stray and unwanted cats and kittens, providing them with a safe haven until they find a permanent home.' />
                    <meta name='keywords' content='UAHRS, rescue society, cat, kitten, adoption' />
                </Helmet>

                <div className="hero__image"></div>
                <div className="heading__box">
                    <h2 className="heading__primary"><span className='heading__primary--main'>Upper Hutt </span><span className='heading__primary--sub'>Animal Rescue Society</span></h2>
                </div>
                <div className="hero__statement">
                    <h3 className="hero__statement--text"><span>Helping cats and kittens</span> <span>find their people</span></h3>
                </div>
                <div className="cta--btns">
                    <Link to="/adopt" className='btn button__adopt' ><span>Adopt a Cat</span></Link>
                    <Link to="/lost" className='btn button__lost'><span >Lost and Found</span></Link>
                </div >
            </section >
        </>

    )
}

export default Home