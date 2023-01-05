import './BarraSuperior.css'
import logo from '../../assets/images/logo.svg'
import { useNavigate } from 'react-router-dom/dist'
import { useDispatch } from 'react-redux'
import {
  mostrarCasosDeUso,
  mostrarIntegraciones,
} from '../../redux/ducks/modals'

const BarraSuperior = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

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
            onClick={() => dispatch(mostrarCasosDeUso())}
          >
            Casos de uso
          </button>
          <button
            className="BarraSuperior__navegacion_link"
            onClick={() => dispatch(mostrarIntegraciones())}
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
