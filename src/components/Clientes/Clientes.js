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
        <img src={logo} style={{ height: '1rem', marginRight: '.25rem', transform: 'translateY(.1rem)' }} alt="CERO" /> es usado por equipos de entre 10 y +10.000 <span style={{ opacity: 1 }}>psicólogos</span>
        {/* <div className="HeroBajada__marquee_tapa" />
        <div className="HeroBajada__marquee">
          <div>psicólogos</div>
          <div>dentistas</div>
          <div>pediatras</div>
          <div>psicólogos</div>
        </div> */}
        {/* <div className="HeroBajada__marquee_tapa HeroBajada__marquee_tapa--inferior" /> */}
      </div>
      <div className="Clientes__logos">
        <img
          className="Clientes__logo"
          src={logoRedSalud}
          alt="Logo RedSalud"
          style={{ transform: 'translateY(-10%)' }}
        />
        <img
          className="Clientes__logo"
          src={logoNorden}
          alt="Logo Norden"
        />
        <img
          className="Clientes__logo"
          src={logoSanasalud}
          alt="Logo Sanasalud"
          style={{ width: '7rem' }}
        />
        <img
          className="Clientes__logo"
          src={logoAlemana}
          alt="Logo Alemana"
          style={{ width: '8.5rem', transform: 'translateY(-5%)' }}
        />
        <img
          className="Clientes__logo"
          src={logoFALP}
          alt="Logo FALP"
          style={{ width: '5.5rem', transform: 'translateY(-10%)' }}
        />
      </div>
    </div>
  )
}

export default Clientes