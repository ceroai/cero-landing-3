import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { esconderCasosDeUso } from '../../../redux/ducks/modals'
import SlideCelularGenerica2022 from '../SlideCelularGenerica2022/SlideCelularGenerica2022'
import classNames from 'classnames'
import './CasosDeUso.css'
import { Icon } from '@iconify/react'
import casos from './casos'

const CasosDeUso = () => {
  const { casosDeUsoVisibles } = useSelector((state) => state.modals)
  const [indiceCasoSeleccionado, setIndiceCasoSeleccionado] = useState(0)
  const dispatch = useDispatch()

  const caso = casos[indiceCasoSeleccionado]

  return (
    <div
      className={classNames({
        CasosDeUso__overlay: true,
        'CasosDeUso__overlay--activo': casosDeUsoVisibles,
      })}
      onClick={() => dispatch(esconderCasosDeUso())}
    >
      <div
        className={classNames({
          CasosDeUso: true,
          'CasosDeUso--visibles': casosDeUsoVisibles,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => dispatch(esconderCasosDeUso())}
          className="CasosDeUso__boton_cerrar"
          title="Cerrar ventana"
        >
          <Icon icon="mdi:close" />
        </button>
        <div className="CasosDeUso__contenedor_botones">
          {casos.map((caso, i) => (
            <button
              onClick={() => setIndiceCasoSeleccionado(i)}
              key={`boton-caso-${i}`}
              className={classNames({
                CasosDeUso__boton: true,
                'CasosDeUso__boton--activo': i === indiceCasoSeleccionado,
              })}
            >
              {caso.titulo}
              {i === indiceCasoSeleccionado && (
                <div className="CasosDeUso__marca_seleccion" />
              )}
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
