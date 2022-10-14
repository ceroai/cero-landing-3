import './Hero.css'
import HeroImagen from './HeroImagen'
import HeroMensajes from './HeroMensajes'

const Hero = () => {
  return (
    <div className="Hero__fondo">
      <div className="Hero">
        <HeroMensajes />
        <HeroImagen />
      </div>
    </div>
  )
}

export default Hero