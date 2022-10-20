import './Capacidad.css'
import Celular from './Celular'

const Capacidad = () => {
  return (
    <div className="Capacidad">
      <h2 className="Capacidad__titulo">Tu Centro Médico a máxima capacidad</h2>
      <div className="Capacidad__textos">
        <h3 className="Capacidad__subtitulo">
          Comunicación automática y efectiva
          con todos tus pacientes
        </h3>
        <p>
          Resolvemos problemas de comunicación entre instituciones de salud y pacientes, desde <strong>confirmaciones</strong> hasta <strong>listas de espera</strong>, <strong>controles preventivos</strong> y <strong>bloqueos de agenda</strong>. </p>
        <p>Y lo hacemos todo de manera <strong>empática</strong> y <strong>respetuosa</strong>.</p>
        <div className="Capacidad__contenedor_botones">
          <button className="Capacidad__boton Capacidad__boton--secundario">Ver casos de uso</button>
          <button className="Capacidad__boton">Pruébalo ahora</button>
        </div>
      </div>
      <div className="Capacidad__contenedor_grafica">
        <Celular />
      </div>
    </div>
  )
}

export default Capacidad