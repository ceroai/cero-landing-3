import './HeroBajada.css'
import logo from '../../../assets/images/logo.svg'

const HeroBajada = () => {
  return (
    <div className="HeroBajada">
      <div className="HeroBajada__texto">
        <img src={logo} style={{ height: '1rem' }} alt="CERO" /> es usado por equipos de entre 10 y +10.000 <span style={{ opacity: 0 }}>psicólogos</span>
        <div className="HeroBajada__marquee_tapa" />
        <div className="HeroBajada__marquee">
          <div>psicólogos</div>
          <div>dentistas</div>
          <div>pediatras</div>
          <div>psicólogos</div>
        </div>
        <div className="HeroBajada__marquee_tapa HeroBajada__marquee_tapa--inferior" />
      </div>
    </div>
  )
}

export default HeroBajada