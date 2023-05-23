import React from 'react'
import { Routes, Route } from 'react-router-dom'
// Import Pages
import Home from './pages/Home'
import About from './pages/About'
import Shopfront from './pages/shop/Shopfront'
import Product from './pages/shop/Product'
import Adopt from './pages/adopt'
import Lost from './pages/Lost'
import LoadingScreen from './components/LoadingScreen'
// Import Components


const Links = () => {
    return (
        <Routes>
            {/* PAGES */}
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Adopt" element={<Adopt />} />
            <Route path="/Lost" element={<Lost />} />
            {/* shop pages */}
            <Route path="/shop" element={<Shopfront />} />
            <Route path="/product/:id" element={<Product />} />

        </Routes>
    )
}

export default Links