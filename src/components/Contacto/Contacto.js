import axios from 'axios'
import _ from 'lodash'
import { useEffect, useRef, useState } from 'react'
import integraciones from '../../data/integraciones'
import './Contacto.css'

const listaIntegraciones = _.uniq(
  _.sortBy([
    ...integraciones.map((i) => i.nombre),
    // Integraciones no integradas
    'Dentidesk',
  ])
)

const Contacto = () => {
  const nombreRef = useRef()
  const [nombre, setNombre] = useState('')
  const [seudonimo, setSeudonimo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')
  const [organizacion, setOrganizacion] = useState('')
  const [software, setSoftware] = useState('')
  const [mailEnviado, setMailEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)

  useEffect(() => nombreRef.current?.focus(), [])

  const contactar = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    params.append('nombre', nombre)
    params.append('telefono', telefono)
    params.append('email', email)
    params.append('seudonimo', seudonimo)
    params.append('organizacion', organizacion)
    params.append('software', software)
    params.append('form-name', 'contactoCero')
    params.append('subject', 'Contacto a través de Cero.ai')
    axios
      .post('/', params, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      .then(() => {
        setMailEnviado(true)
        setEnviando(false)
      })
      .catch(() => {
        setMailEnviado(false)
        setEnviando(false)
      })
  }

  return (
    <div className="Contacto">
      <div className="Contacto__contenedor_central">
        {mailEnviado && (
          <div className="Contacto__contenedor_mensaje_enviado">
            <div className="Contacto__mensaje_enviado">
              <h1 className="Contacto__mensaje_enviado_titulo">¡Gracias!</h1>
              <p>Recibimos tu información</p>
              <p>Pronto nos pondremos en contacto contigo</p>
              <button
                className="Contacto__boton"
                onClick={() => setMailEnviado(false)}
              >
                Aceptar
              </button>
            </div>
          </div>
        )}
        <div className="Contacto__contenedor_texto">
          <h1 className="Contacto__titulo">Contáctanos</h1>
          <p className="Contacto__bajada">
            Prueba nuestro servicio <strong>gratis</strong> y verás cómo
            aumentan tus ingresos ahorrando miles de horas de coordinación,
            disminuyendo el No Show y aumentando la cantidad de pacientes que
            puedes atender. Déjanos tus datos y te contactaremos.
          </p>
        </div>
        <div className="Contacto__contenedor_formulario">
          <form className="Contacto__formulario" onSubmit={contactar}>
            <div className="Contacto__campo">
              <label className="Contacto__label_campo">Nombre</label>
              <input
                type="text"
                required
                className="Contacto__input"
                ref={nombreRef}
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="Contacto__campo" style={{ display: 'none' }}>
              <label className="Contacto__label_campo">Seudónimo</label>
              <input
                type="text"
                className="Contacto__input"
                value={seudonimo}
                onChange={(e) => setSeudonimo(e.target.value)}
              />
            </div>
            <div className="Contacto__campo">
              <label className="Contacto__label_campo">E-mail</label>
              <input
                type="email"
                required
                className="Contacto__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="Contacto__campo">
              <label className="Contacto__label_campo">Teléfono</label>
              <input
                type="text"
                required
                className="Contacto__input"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div className="Contacto__campo">
              <label className="Contacto__label_campo">Organización</label>
              <input
                type="text"
                required
                className="Contacto__input"
                value={organizacion}
                onChange={(e) => setOrganizacion(e.target.value)}
              />
            </div>
            <div className="Contacto__campo">
              <label className="Contacto__label_campo">
                Software de agenda
              </label>
              <select
                className="Contacto__select"
                required
                value={software}
                onChange={(e) => setSoftware(e.target.value)}
              >
                {listaIntegraciones.map((integracion) => (
                  <option key={`option-${integracion}`} value={integracion}>
                    {integracion}
                  </option>
                ))}
                <option>Otro</option>
              </select>
            </div>
            <button
              type="submit"
              className="Contacto__boton"
              disabled={enviando}
            >
              {enviando ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacto
