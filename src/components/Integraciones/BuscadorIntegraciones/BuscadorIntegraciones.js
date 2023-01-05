import { InlineIcon } from '@iconify/react'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import integraciones from '../../../data/integraciones'
import { esconderIntegraciones } from '../../../redux/ducks/modals'
import './BuscadorIntegraciones.css'

const BuscadorIntegraciones = () => {
  const [busqueda, setBusqueda] = useState('')
  const inputRef = useRef()
  const dispatch = useDispatch()

  useEffect(() => inputRef.current?.focus(), [])

  const integracionesFiltradas = integraciones.filter(
    (i) =>
      i.nombre.toLocaleLowerCase().indexOf(busqueda.toLocaleLowerCase()) >= 0
  )

  const navigate = useNavigate()

  return (
    <div
      className="BuscadorIntegraciones__overlay"
      onClick={() => dispatch(esconderIntegraciones())}
    >
      <div
        className="BuscadorIntegraciones"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="BuscadorIntegraciones__boton_cerrar"
          onClick={() => dispatch(esconderIntegraciones())}
        >
          <InlineIcon icon="mdi:close" />
        </button>
        <input
          className="BuscadorIntegraciones__input"
          placeholder="Busca aquí tu sistema de agenda"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          ref={inputRef}
        />
        {integracionesFiltradas.length > 0 ? (
          <div className="BuscadorIntegraciones__contenedor_integraciones">
            {integracionesFiltradas.map((integracion) => (
              <div
                key={integracion.nombre}
                className="BuscadorIntegraciones__integracion"
              >
                <img
                  className="BuscadorIntegraciones__logo_integracion"
                  alt={`Logo ${integracion.nombre}`}
                  src={integracion.logo}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="BuscadorIntegraciones__contenedor_mensaje">
            <p className="BuscadorIntegraciones__mensaje">
              ¿No encuentras tu sistema de agenda?
            </p>
            <button
              className="BuscadorIntegraciones__boton"
              onClick={() => navigate('/contacto')}
            >
              Contáctanos y nos integramos
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default BuscadorIntegraciones
