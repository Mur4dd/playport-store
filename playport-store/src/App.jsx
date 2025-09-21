import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Hero from './components/hero'
import Cataloge from './components/catalog'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Cataloge />
    </>
  )
}

export default App
