import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import MyCard from './MyCard'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header titulo = "Adopta un perrito"/>
      <div class = "cards">
        <MyCard img = "./src\assets\pexels-alexandru-rotariu-230845-733416.jpg" nombre = "Bartolo" desc = "LLeno de energia y listo para jugar" texto = "Raza" color = "primary"/>
        <MyCard img = "./src\assets\pexels-charlesdeluvio-1851164.jpg" nombre = "Messi" desc = "Es jugueton, amigable y se lleva bien con los niños" texto = "Raza" color = "success"/>
        <MyCard img = "./src\assets\pexels-pixabay-220938.jpg" nombre = "Gohan" desc = "Un perro de tamaño mediano con un corazon gigante" texto = "raza" color = "danger"/>
        <MyCard img = "./src\assets\pexels-valeriya-1805164.jpg" nombre = "Princesa" desc = "Es una compañera leal y cariñosa que adora los mimos y los abrazos" texto = "Raza" color = "warning"/>
      </div>
      <Footer />
    </>
  )
}

export default App
