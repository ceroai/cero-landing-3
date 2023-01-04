import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { esconderCasosDeUso } from '../../../redux/ducks/modals'
import SlideCelularGenerica2022 from '../SlideCelularGenerica2022/SlideCelularGenerica2022'
import classNames from 'classnames'
import './CasosDeUso.css'

const casos = [
  {
    titulo: "Confirmaciones de citas",
      mensajesEntrantes: [
        {
          contenido: 
            <>
              Hola Paulo, soy Gaby del Área Médica de la clínica. Le escribo
              para confirmar su cita para <strong>mañana jueves 13 de enero a las 13:45
              que tiene con la Dra. Fabiola Lavanderos de Otorrinolaringología</strong> en
              nuestra sucursal de Providencia. ¿Confirma su cita? 
            </>,
          tituloExplicacion: 
            <>
              Confirmación en lenguaje natural
            </>,
          contenidoExplicacion:
            <>
              Detalles como usar "Dra." en nombres femeninos
            </>
        },
        {
          contenido:
            <>
              Excelente, confirmado para mañana jueves 😊<br />
              <ul>
                <li>• Recuerde llegar 20 minutos antes de su cita</li>
                <li>• La dirección es Las Lilas 2039 (Metro Salvador) Piso 300 <span className="SlideCelularGenerica2022__link">https://maps.gl/diyMvNQ</span></li>
              </ul>
            </>,
          tituloExplicacion:
            <>
              Dirección en el mapa
            </>,
          contenidoExplicacion:
            <>
              Proporcionamos información adicional para facilitar la presentación del paciente
            </>
        },
      ],
      mensajesSalientes:
        [
          {
            contenido:
              <>
                👍 Cnfirmo
              </>
            ,
            tituloExplicacion:
              <>
              Capturamos respuestas en lenguaje coloquial
              </>,
            contenidoExplicacion:
              <>
              Con emojis y faltas de ortografía
              </>
          },
          {
            contenido:
              <>
                Gracias!
              </>
          },
        ]
  },
  {
    titulo: ""
  }
]

const CasosDeUso = () => {

  const { casosDeUsoVisibles } = useSelector(state => state.modals)
  const [indiceCasoSeleccionado, setIndiceCasoSeleccionado] = useState(0)
  const dispatch = useDispatch()

  const caso = casos[indiceCasoSeleccionado]

  return (
    <div
      className={classNames({
        "CasosDeUso__overlay": true,
        "CasosDeUso__overlay--activo": casosDeUsoVisibles
      })}
      onClick={() => dispatch(esconderCasosDeUso())}
    >
      <div
        className={classNames({
          "CasosDeUso": true,
          "CasosDeUso--visibles": casosDeUsoVisibles
        })}
        onClick={e => e.stopPropagation()}
      >
        <div className="CasosDeUso__contenedor_botones">
          {casos.map((caso, i) => (
            <button
              onClick={() => setIndiceCasoSeleccionado(i)}
              key={`boton-caso-${i}`}
            >
              {caso.titulo}
            </button>
          ))}
        </div>
        <div className="CasosDeUso__contenedor_caso">
          <SlideCelularGenerica2022
            titulo={caso.titulo}
            mensajesEntrantes={caso.mensajesEntrantes}
            mensajesSalientes={caso.mensajesSalientes}
          />
        </div>
      </div>
    </div>
    
  )
}

export default CasosDeUso