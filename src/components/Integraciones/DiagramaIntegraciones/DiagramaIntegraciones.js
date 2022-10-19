import { Icon } from '@iconify/react'
import './DiagramaIntegraciones.css'

const integraciones = [
  {
    nombre: 'Dentalink'
  },
  {
    nombre: 'Medilink'
  },
  {
    nombre: 'Dentalink'
  },
  {
    nombre: 'Dentalink'
  },
  {
    nombre: 'Dentalink'
  },
  {
    nombre: 'Dentalink'
  },
  {
    nombre: 'Dentalink'
  },
  {
    nombre: 'Dentalink'
  },
  {
    nombre: 'Dentalink'
  },
  {
    nombre: 'Dentalink'
  },
  {
    nombre: 'Dentalink'
  },
  {
    nombre: 'Dentalink'
  },
]

const DiagramaIntegraciones = () => {

  return (
    <div className="DiagramaIntegraciones">
      <div className="DiagramaIntegraciones__contenedor_integraciones">
        {integraciones.map(integracion => (
          <div
            key={integracion.nombre}
            className="DiagramaIntegraciones__integracion"
          >

          </div>
        ))}
      </div>
      <div className="DiagramaIntegraciones__division">
        <div className="DiagramaIntegraciones__division_linea DiagramaIntegraciones__division_linea--horizontal" />
        <div className="DiagramaIntegraciones__division_linea DiagramaIntegraciones__division_linea--vertical" />
        <div className="DiagramaIntegraciones__engranaje">
          <Icon icon="mdi:cog" />
        </div>
      </div>
      <div className="DiagramaIntegraciones__cero">
        <div className="DiagramaIntegraciones__logo_cero">
          CERO
        </div>
      </div>
    </div>
  )
}

export default DiagramaIntegraciones