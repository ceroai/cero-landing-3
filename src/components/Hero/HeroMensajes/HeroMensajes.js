import './HeroMensajes.css'
import logo from '../../../assets/images/logo.svg'
import { useNavigate } from 'react-router-dom'

const HeroMensajes = () => {

  const navigate = useNavigate()

  return (
    <div className="HeroMensajes">
      <h1 className="HeroMensajes__titulo">
        Más Pacientes Atendidos <br />
        Menos Horas Perdidas
      </h1>
      <p className="HeroMensajes__bajada">
        En <img src={logo} style={{ height: '.75rem' }} alt="Logo CERO" /> nos encargamos de que <br />
        todos tus pacientes lleguen a sus citas <br />
        a la hora 🕐 y preparados 💊
      </p>
      <button
        className="HeroMensajes__boton"
        onClick={() => navigate('/contacto')}
      >
        Pide tu prueba gratis
      </button>
    </div>
  )
}

export default HeroMensajes