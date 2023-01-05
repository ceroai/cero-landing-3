import './Clientes.css'
import logoRedSalud from '../../assets/images/logo-redsalud.svg'
import logoNorden from '../../assets/images/logo-norden.svg'
import logoSanasalud from '../../assets/images/logo-sanasalud.svg'
import logoAlemana from '../../assets/images/logo-alemana.svg'
import logoFALP from '../../assets/images/logo-falp.svg'
import logo from '../../assets/images/logo-white.svg'

const Clientes = () => {
  return (
    <div className="Clientes">
      <div className="Clientes__texto">
        <img src={logo} className="Clientes__logo_cero" alt="CERO" /> es usado
        por equipos de entre 10 y +10.000 profesionales
      </div>
      <div className="Clientes__logos">
        <img
          className="Clientes__logo Clientes__logo--redsalud"
          src={logoRedSalud}
          alt="Logo RedSalud"
        />
        <img className="Clientes__logo" src={logoNorden} alt="Logo Norden" />
        <img
          className="Clientes__logo Clientes__logo--sanasalud"
          src={logoSanasalud}
          alt="Logo Sanasalud"
        />
        <img
          className="Clientes__logo Clientes__logo--alemana"
          src={logoAlemana}
          alt="Logo Alemana"
        />
        <img
          className="Clientes__logo Clientes__logo--falp"
          src={logoFALP}
          alt="Logo FALP"
        />
      </div>
    </div>
  )
}

export default Clientes
