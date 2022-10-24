import _ from 'lodash'
import integraciones from '../../data/integraciones'
import './Contacto.css'

const Contacto = () => {
  return (
    <div className="Contacto">
      <div className="Contacto__contenedor_central">
        <div className="Contacto__contenedor_texto">
          <h1 className="Contacto__titulo">Prueba</h1>
          <p className="Contacto__bajada">
            Danos 30 minutos para mostrarte
            como podemos ayudarte a solucionar
            tu proceso de confirmación de pacientes.
            Nuestros clientes ahorran miles de horas
            de coordinación y aumentan sus ingresos
            disminuyendo el No Show de pacientes.
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