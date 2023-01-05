import { Route, Routes } from 'react-router-dom'
import Apoyo from '../Apoyo'
import BarraSuperior from '../BarraSuperior'
import Capacidad from '../Capacidad'
import Clientes from '../Clientes'
import Contacto from '../Contacto'
import Hero from '../Hero'
import Integraciones from '../Integraciones'
import Tecnologia from '../Tecnologia'
import Testimonios from '../Testimonios'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <BarraSuperior />
      <Routes>
        <Route path="/contacto" element={<Contacto />} />
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Clientes />
              <Capacidad />
              <Integraciones />
              <Tecnologia />
              <Testimonios />
              <Apoyo />
            </>
          }
        />
      </Routes>
    </div>
  )
}

export default App
