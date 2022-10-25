import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { mostrarIntegraciones } from '../../redux/ducks/modals'
import BuscadorIntegraciones from './BuscadorIntegraciones'
import DiagramaIntegraciones from './DiagramaIntegraciones'
import './Integraciones.css'

const Integraciones = () => {

  const { integracionesVisibles } = useSelector(state => state.modals)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <>
      {integracionesVisibles && <BuscadorIntegraciones  />}
      <div className="Integraciones__fondo">
        <div className="Integraciones">
          <div className="Integraciones__contenedor_grafica">
            <DiagramaIntegraciones />
          </div>
          <div className="Integraciones__textos">
            <h3 className="Integraciones__subtitulo">
              Trabajamos de la mano con tu centro
              e integrados a tus sistemas
            </h3>
            <p>
              Nos <strong>adaptamos a tus procesos</strong> de contactabilidad,
              y respetamos los horarios y flujos que tú ya sabes
              que funcionan, todo 100% integrado a tu actual
              sistema de agenda o CRM.
            </p>
            <div className="Integraciones__contenedor_botones">
              <button
                className="Integraciones__boton Integraciones__boton--secundario"
                onClick={() => dispatch(mostrarIntegraciones())}
              >
                  Ver integraciones
              </button>
              <button className="Integraciones__boton" onClick={() => navigate('/contacto')}>Pruébalo ahora</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Integraciones