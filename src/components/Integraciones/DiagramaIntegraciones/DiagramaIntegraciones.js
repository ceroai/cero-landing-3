import { Icon } from '@iconify/react'
import logoCero from '../../../assets/images/logo.svg'
import './DiagramaIntegraciones.css'

import logoDentalink from '../../../assets/images/integraciones/dentalink.svg'
import logoMedilink from '../../../assets/images/integraciones/medilink.svg'
import logoRezebra from '../../../assets/images/integraciones/rezebra.svg'
import logoReservo from '../../../assets/images/integraciones/reservo.svg'
import logoSistemasExpertos from '../../../assets/images/integraciones/sistemas-expertos.svg'
import logoMedicap from '../../../assets/images/integraciones/medicap.svg'
import logoMedinet from '../../../assets/images/integraciones/medinet.svg'
import logoIntersystems from '../../../assets/images/integraciones/intersystems.svg'
import logoAgendaPro from '../../../assets/images/integraciones/agendapro.svg'
import logoPhilaxmed from '../../../assets/images/integraciones/philaxmed.svg'
import logoBewe from '../../../assets/images/integraciones/bewe.svg'
import logoCodesud from '../../../assets/images/integraciones/codesud.svg'
import logoKopland from '../../../assets/images/integraciones/kopland.svg'
import logoMasterKey from '../../../assets/images/integraciones/masterkey.svg'
import logoSalutem from '../../../assets/images/integraciones/salutem.svg'
import logoActiveCampaign from '../../../assets/images/integraciones/active-campaign.svg'

const integraciones = [
  {
    nombre: 'Dentalink',
    logo: logoDentalink
  },
  {
    nombre: 'Medilink',
    logo: logoMedilink
  },
  {
    nombre: 'Rezebra',
    logo: logoRezebra
  },
  {
    nombre: 'Reservo',
    logo: logoReservo
  },
  {
    nombre: 'SistemasExpertos',
    logo: logoSistemasExpertos
  },
  {
    nombre: 'Medicap',
    logo: logoMedicap
  },
  {
    nombre: 'Medinet',
    logo: logoMedinet
  },
  {
    nombre: 'Intersystems',
    logo: logoIntersystems
  },
  {
    nombre: 'AgendaPro',
    logo: logoAgendaPro
  },
  {
    nombre: 'Philaxmed',
    logo: logoPhilaxmed
  },
  {
    nombre: 'Bewe',
    logo: logoBewe
  },
  {
    nombre: 'Codesud',
    logo: logoCodesud
  },
  {
    nombre: 'Kopland',
    logo: logoKopland
  },
  {
    nombre: 'MasterKey',
    logo: logoMasterKey
  },
  {
    nombre: 'Salutem',
    logo: logoSalutem
  },
  {
    nombre: 'ActiveCampaign',
    logo: logoActiveCampaign
  }
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