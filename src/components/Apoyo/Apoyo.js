import './Apoyo.css'
import logo from '../../assets/images/logo.svg'
import logoSupChile from '../../assets/images/logo-sup-chile.svg'
import logoYC from '../../assets/images/logo-y-combinator.svg'

const Apoyo = () => {
  return (
    <div className="Apoyo">
      <div>
        <img src={logo} alt="CERO" className="Apoyo__logo_cero" /> es apoyado
        por
      </div>
      <div className="Apoyo__logos">
        <img
          className="Apoyo__logo_apoyador"
          src={logoYC}
          alt="Logo Y Combinator"
        />
        <img
          className="Apoyo__logo_apoyador"
          src={logoSupChile}
          alt="Logo SUP Chile"
        />
      </div>
    </div>
  )
}

export default Apoyo
