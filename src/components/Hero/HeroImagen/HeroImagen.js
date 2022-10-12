import './HeroImagen.css'
import { Icon } from '@iconify/react'

const HeroImagen = () => {
  return (
    <div className="HeroImagen">
      <div className="HeroImagen__agenda">
        <div className="HeroImagen__agenda_superior" />
        <div className="HeroImagen__agenda_contenedor_slots">
          <div className="HeroImagen__agenda_slot HeroImagen__agenda_slot--bw">
            <div className="HeroImagen__agenda_slot_check">
              <Icon icon="mdi:check-bold" />
            </div>
          </div>
          <div className="HeroImagen__agenda_slot">
            <div className="HeroImagen__agenda_slot_check">
              <Icon icon="mdi:check-bold" />
            </div>
          </div>
          <div className="HeroImagen__agenda_slot HeroImagen__agenda_slot--bw" />
          <div className="HeroImagen__agenda_slot HeroImagen__agenda_slot--selected" />
          <div className="HeroImagen__agenda_slot HeroImagen__agenda_slot--selected HeroImagen__agenda_slot--bw">
            <div className="HeroImagen__agenda_slot_check">
              <Icon icon="mdi:check-bold" />
            </div>
          </div>
          <div className="HeroImagen__agenda_slot">
            <div className="HeroImagen__agenda_slot_check">
              <Icon icon="mdi:check-bold" />
            </div>
          </div>
          <div className="HeroImagen__agenda_slot HeroImagen__agenda_slot--bw" />
          <div className="HeroImagen__agenda_slot HeroImagen__agenda_slot--bw" />
          <div className="HeroImagen__agenda_slot HeroImagen__agenda_slot--bw" />
        </div>
        <div className="HeroImagen__celular HeroImagen__celular--3">
          <p className="HeroImagen__mensaje HeroImagen__mensaje--entrante">
            <strong>Juan</strong>, vienes a tu cita <strong>mañana a las 5 pm</strong>?
          </p>
          <p className="HeroImagen__mensaje HeroImagen__mensaje--saliente">
            <strong>Claro!</strong> 👍 Nos vemos
          </p>
        </div>
        <div className="HeroImagen__celular HeroImagen__celular--5">
          <p className="HeroImagen__mensaje HeroImagen__mensaje--entrante">
            <strong>Belén</strong>, se liberó una hora con el Dr. Parra <strong>a las 5 pm</strong>, te sirve?
          </p>
          <p className="HeroImagen__mensaje HeroImagen__mensaje--saliente">
            Si! Por favor llevaba tiempo esperándola 😊
          </p>
        </div>
        <div className="HeroImagen__celular HeroImagen__celular--6">
          <p className="HeroImagen__mensaje HeroImagen__mensaje--saliente">
            Gaby, lo siento, <strong>no alcanzo a llegar</strong> a la cita con el Dr. Parra 😔
          </p>
          <p className="HeroImagen__mensaje HeroImagen__mensaje--entrante">
            No hay problema <strong>Andrea</strong>! Te sirve el <strong>viernes a las 3pm</strong>?
          </p>
          <p className="HeroImagen__mensaje HeroImagen__mensaje--saliente">
            <strong>Sí</strong>! Gracias
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroImagen