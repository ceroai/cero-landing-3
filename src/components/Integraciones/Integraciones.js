import DiagramaIntegraciones from './DiagramaIntegraciones/DiagramaIntegraciones'
import './Integraciones.css'

const Integraciones = () => {
  return (
    <div className="Integraciones__fondo">
      <div className="Integraciones">
        <div className="Integraciones__contenedor_grafica">
          <DiagramaIntegraciones />
        </div>
        <div className="Integraciones__textos">
          <h3 className="Integraciones__subtitulo">
            Trabajamos de la mano con tu centro <br />
            e integrado a tus sistemas
          </h3>
          <p>
            Nos <strong>adaptamos a tus procesos</strong> de contactabilidad, <br />
            y respetamos los horarios y flujos que tú ya sabes <br />
            que funcionan, todo 100% integrado a tu actual <br />
            sistema de agenda o CRM.
          </p>
          <div className="Integraciones__contenedor_botones">
            <button className="Integraciones__boton Integraciones__boton--secundario">Ver integraciones</button>
            <button className="Integraciones__boton">Pruébalo ahora</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Integraciones