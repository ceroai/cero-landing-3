import _ from 'lodash'
import { useEffect, useRef } from 'react'
import integraciones from '../../data/integraciones'
import './Contacto.css'

const Contacto = () => {

  const nombreRef = useRef()

  useEffect(() => nombreRef.current?.focus(), [])

  return (
    <div className="Contacto">
      <div className="Contacto__contenedor_central">
        <div className="Contacto__contenedor_texto">
          <h1 className="Contacto__titulo">Contáctanos</h1>
          <p className="Contacto__bajada">
            Prueba nuestro servicio <strong>gratis</strong> y verás cómo
            aumentan tus ingresos ahorrando miles de horas de coordinación,
            disminuyendo el No Show y aumentando la cantidad de pacientes
            que puedes atender. Déjanos tus datos y te contactaremos.
          </p>
        </div>
        <div className="Contacto__contenedor_formulario">
          <form className="Contacto__formulario">
            <div className="Contacto__campo">
              <label className="Contacto__label_campo">Nombre</label>
              <input
                type="text"
                required
                className="Contacto__input"
                ref={nombreRef}
              />
            </div>
            <div className="Contacto__campo">
              <label className="Contacto__label_campo">E-mail</label>
              <input
                type="email"
                required
                className="Contacto__input"
              />
            </div>
            <div className="Contacto__campo">
              <label className="Contacto__label_campo">Teléfono</label>
              <input
                type="text"
                required
                className="Contacto__input"
              />
            </div>
            <div className="Contacto__campo">
              <label className="Contacto__label_campo">Software de agenda</label>
              <select
                className="Contacto__select"
                required
              >
                {_.sortBy(integraciones, 'nombre').map(integracion => (
                  <option value={integracion.nombre}>
                    {integracion.nombre}
                  </option>
                ))}
                <option>Otro</option>
              </select>
            </div>
            <button
              type="submit"
              className="Contacto__boton"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacto