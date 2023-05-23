import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Links from './Links'
import './app.css'


const App = () => {
  return (
    <HashRouter>
      <Header />
      <Links />
      <Footer />
    </HashRouter>
  )
}

export default App