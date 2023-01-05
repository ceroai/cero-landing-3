import { useNavigate } from 'react-router-dom'
import DiagramaTecnologia from './DiagramaTecnologia'
import './Tecnologia.css'

const Tecnologia = () => {
  const navigate = useNavigate()

  return (
    <div className="Tecnologia">
      <div className="Tecnologia__textos">
        <h3 className="Tecnologia__subtitulo">
          Tecnología de punta
          <br />
          para escalar tu operación
        </h3>
        <p>
          Coordinamos <strong>más de 1.000.000 de citas</strong> al mes en{' '}
          <strong>+250 centros de salud</strong>, liberando rápidamente las
          citas que hay que liberar, reagendando cuando es necesario reagendar y
          haciendo tu operación más eficiente.
        </p>
        <div className="Tecnologia__contenedor_botones">
          <button
            className="Tecnologia__boton"
            onClick={() => navigate('/contacto')}
          >
            Pide tu prueba gratis
          </button>
        </div>
      </div>
      <div className="Tecnologia__contenedor_grafica">
        <DiagramaTecnologia />
      </div>
    </div>
  )
}

export default Tecnologia
