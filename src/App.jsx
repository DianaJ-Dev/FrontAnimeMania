
import './App.css'
import { Navbar } from './components/Navbar'
import { Carusel } from './components/Carusel'
import { useState } from 'react'
import { Footer } from './components/Footer';

function App() {

  const [anime, setAnime] = useState('');

  const onChangeAnime = (newAnime) => {
    setAnime(newAnime)
  }

  return (
    <>
      <Navbar
        funcAux={value => onChangeAnime(value)}
      />
      <Carusel
        anime={anime}
      />
      <Footer/>
    </>
  )
}

export default App
