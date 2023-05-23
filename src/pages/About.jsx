import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <div className="about--page ">
                <div className='about--container'>
                    <div className='about--information'>
                        <h2>About Us</h2>
                        <p>Upper Hutt Animal Rescue Society (UHARS) operates as a shelter that takes in homeless, stray and unwanted cats and kittens, providing them with a safe haven until they find a permanent home.</p>
                        <p>Charity with Givealittle page.</p>
                        <p>Will offer contact details of organisations who will take other animals.</p>
                    </div>
                    <div className="contact--information">
                        <h2>Contact Us</h2>
                        <div className="flexible">
                            <h3>Location:</h3>
                            <div>
                                <p>4 King Charles Drive</p>
                                <p>Kingsley Heights</p>
                                <p>Upper Hutt 5018</p>
                            </div>
                        </div>
                        <div className="flexible">
                            <h3>Opening Hours</h3>
                            <p>Open every day 10am - 2pm</p>
                        </div>
                        <div className="flexible">
                            <h3>Email:</h3>
                            <p>info.uhars@gmail.com</p>
                        </div>
                        <div className="flexible">
                            <h3>Phone Number:</h3>
                            <p>04 526 2672</p>
                        </div>
                    </div>
                </div>
                <div className='about--socials'>
                    <div className="facebook">
                        <div>
                            <Link to="https://www.facebook.com/UHARSNZ/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                            </Link>
                            <h4>Facebook Page</h4>
                        </div>
                    </div>
                    <div className="give-a-little">
                        <Link to="https://www.givealittle.co.nz/org/animalrescue">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-coin" viewBox="0 0 16 16">
                                <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                            </svg>
                        </Link>
                        <h4> Give a Little donation</h4>
                    </div>
                </div>
                <div className='about--map'>
                    <img src="/map2.png" alt="map of location - closer view" />
                    <img src="/map.png" alt="map of location - large view" />
                </div>
            </div>
        </>

    )
}

export default About