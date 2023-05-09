import { useState } from "react";

import { Home } from "./components/Home"
import './App.css'
import Header from './components/Header';

function App() {

  const [cartAberto, setCart] = useState(false)
const abrirCart = () => {
  setCart(true)
}

  return (
    <>
    <Header onClick={abrirCart} cartI={cartAberto}>
    </Header>
    <Home/>
    </>
  )
}

export default App
