import './BarraSuperior.css'
import logo from '../../assets/images/logo.svg'
import { useNavigate } from 'react-router-dom/dist'

const BarraSuperior = () => {

  const navigate = useNavigate()

  return (
    <div className="BarraSuperior__contenedor">
      <div className="BarraSuperior__barrita" />
      <div className="BarraSuperior">
        <img
          className="BarraSuperior__logo"
          src={logo}
          alt="Logo Cero"
          onClick={() => navigate('/')}
        />
        <nav className="BarraSuperior__navegacion">
          <button
            className="BarraSuperior__navegacion_link"
          >
            Casos de uso
          </button>
          <button
            className="BarraSuperior__navegacion_link"
          >
            Integraciones
          </button>
          <button
            className="BarraSuperior__navegacion_boton"
            onClick={() => navigate('/contacto')}
          >
            Pruébalo ahora
          </button>
        </nav>
      </div>
    </div>
  )
}

export default BarraSuperior