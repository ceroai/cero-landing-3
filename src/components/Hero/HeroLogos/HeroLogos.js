import './HeroLogos.css'
import logoRedSalud from '../../../assets/images/logo-redsalud.svg'
import logoNorden from '../../../assets/images/logo-norden.svg'
import logoSanasalud from '../../../assets/images/logo-sanasalud.svg'
import logoAlemana from '../../../assets/images/logo-alemana.svg'
import logoFALP from '../../../assets/images/logo-falp.svg'

const HeroLogos = () => {
  return (
    <div className="HeroLogos">
      <img
        className="HeroLogos__logo"
        src={logoRedSalud}
        alt="Logo RedSalud"
        style={{ transform: 'translateY(-5%)' }}
      />
      <img
        className="HeroLogos__logo"
        src={logoNorden}
        alt="Logo Norden"
      />
      <img
        className="HeroLogos__logo"
        src={logoSanasalud}
        alt="Logo Sanasalud"
        style={{ width: '8rem' }}
      />
      <img
        className="HeroLogos__logo"
        src={logoAlemana}
        alt="Logo Alemana"
        style={{ width: '9.5rem' }}
      />
      <img
        className="HeroLogos__logo"
        src={logoFALP}
        alt="Logo FALP"
        style={{ width: '7rem', transform: 'translateY(-5%)' }}
      />
    </div>
  )
}

export default HeroLogos