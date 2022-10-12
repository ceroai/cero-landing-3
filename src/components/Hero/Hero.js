import './Hero.css'
import HeroBajada from './HeroBajada'
import HeroImagen from './HeroImagen'
import HeroLogos from './HeroLogos'
import HeroMensajes from './HeroMensajes'

const Hero = () => {
  return (
    <div className="Hero">
      <HeroMensajes />
      <HeroImagen />
      <HeroBajada />
      <HeroLogos />
    </div>
  )
}

export default Hero