import { Icon } from '@iconify/react'
import logoCero from '../../../assets/images/logo.svg'
import './DiagramaIntegraciones.css'
import { useMemo } from 'react'
import integraciones from '../../../data/integraciones'
import _ from 'lodash'

const DiagramaIntegraciones = () => {

  const integracionesRevueltas = useMemo(() => _.shuffle(integraciones), [])

  return (
    <div className="DiagramaIntegraciones">
      <div className="DiagramaIntegraciones__contenedor_integraciones">
        {integracionesRevueltas.slice(0, 16).map(integracion => (
          <div
            key={integracion.nombre}
            className="DiagramaIntegraciones__integracion"
          >
            <img
              className="DiagramaIntegraciones__logo_integracion"
              alt={`Logo ${integracion.nombre}`}
              src={integracion.logo}
            />
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
        <div className="DiagramaIntegraciones__contenedor_logo_cero">
          <img src={logoCero} alt="Logo CERO" className="DiagramaIntegraciones__logo_cero" />
        </div>
      </div>
    </div>
  )
}

export default DiagramaIntegraciones