import { Icon, InlineIcon } from '@iconify/react'
import { format } from 'date-fns'
import { useEffect, useRef, useState } from 'react'
import logo from '../../../assets/images/logo.svg'
import './Celular.css'

const mensajesEntrantes = [
  <>
    ¡Hola Gabriela! Tiene una cita para un{' '}
    <strong>importante examen de salud</strong> el próximo martes en nuestro
    centro médico. ¿Asistirá?
  </>,
  <>Entiendo, no se preocupe. ¿Le gustaría cambiar su cita para otro día?</>,
  <>
    ¡Perfecto! Nos comunicaremos con Ud. para coordinar el reagendamiento de su
    cita 🕖
  </>,
]

const mensajesSalientes = [
  <>
    Hola. Tengo que asistir sí o sí a otro compromiso, está difícil.
    <div className="Celular__deteccion">
      <div className="Celular__etiqueta_deteccion">
        <InlineIcon className="Celular__icono_no" icon="mdi:cancel" />
        Paciente cancela cita
      </div>
      <div className="Celular__etiqueta_deteccion Celular__etiqueta_deteccion--corta">
        <InlineIcon className="Celular__icono_no" icon="mdi:cancel" />
        Cancela
      </div>
      <div className="Celular__respuesta_deteccion">Generando respuesta...</div>
    </div>
  </>,
  <>
    Eso sería ideal!
    <div className="Celular__deteccion">
      <div className="Celular__etiqueta_deteccion">
        <InlineIcon className="Celular__icono_si" icon="mdi:check" />
        Paciente reagenda cita
      </div>
      <div className="Celular__etiqueta_deteccion Celular__etiqueta_deteccion--corta">
        <InlineIcon className="Celular__icono_si" icon="mdi:check" />
        Reagenda
      </div>
      <div className="Celular__respuesta_deteccion">Generando respuesta...</div>
    </div>
  </>,
  <>
    Muchas gracias! Que buena atención 👩‍🦰 💯
    <div className="Celular__deteccion">
      <div className="Celular__etiqueta_deteccion">
        <InlineIcon className="Celular__icono_si" icon="mdi:check" />
        Interacción finalizada
      </div>
      <div className="Celular__etiqueta_deteccion Celular__etiqueta_deteccion--corta">
        <InlineIcon className="Celular__icono_si" icon="mdi:check" />
        Finaliza
      </div>
    </div>
  </>,
]

const Celular = () => {
  const [hora, setHora] = useState(Date.now())

  const elemEstado = useRef()
  const elemMsg1 = useRef()
  const elemMsg2 = useRef()
  const elemMsg3 = useRef()
  const elemMsg4 = useRef()
  const elemMsg5 = useRef()
  const elemMsg6 = useRef()

  useEffect(() => {
    const actualizarHora = setInterval(() => setHora(new Date()), 60000)
    return () => clearInterval(actualizarHora)
  }, [])

  return (
    <div className="Celular">
      <div className="Celular__solapa"></div>
      <div className="Celular__barra_estado">
        <p>{format(hora, 'HH:mm')}</p>
        <p className="Celular__barra_estado_iconos">
          <InlineIcon icon="mdi:wifi" />
          <InlineIcon
            icon="mdi:battery"
            style={{ transform: 'rotate(90deg)' }}
          />
        </p>
      </div>
      <div className="Celular__barra_app">
        <div className="Celular__informacion_contacto">
          <Icon className="Celular__icono_volver" icon="mdi:chevron-left" />
          <div className="Celular__avatar">
            <img
              className="Celular__imagen_avatar"
              src={logo}
              alt="Avatar cero"
            />
          </div>
          <div className="Celular__contacto">
            <p className="Celular__nombre_contacto">
              Centro Médico{' '}
              <InlineIcon
                icon="mdi:check-decagram"
                className="Celular__icono_verificado"
              />
            </p>
            <p ref={elemEstado} className="Celular__estado_contacto">
              en línea
            </p>
          </div>
        </div>
        <div className="Celular__iconos_barra_app">
          <Icon icon="mdi:camera" />
          <Icon icon="mdi:phone" />
        </div>
      </div>
      <div className="Celular__pantalla">
        <div
          ref={elemMsg1}
          className="Celular__mensaje Celular__mensaje--entrante"
          style={{ animationDelay: `${1 + 2 * Math.random()}s` }}
        >
          {mensajesEntrantes[0]}
        </div>
        <div
          ref={elemMsg2}
          className="Celular__mensaje Celular__mensaje--saliente"
          style={{ animationDelay: `${6 + 2 * Math.random()}s` }}
        >
          {mensajesSalientes[0]}
        </div>
        <div
          ref={elemMsg3}
          className="Celular__mensaje Celular__mensaje--entrante"
          style={{ animationDelay: `${9 + 2 * Math.random()}s` }}
        >
          {mensajesEntrantes[1]}
        </div>
        <div
          ref={elemMsg4}
          className="Celular__mensaje Celular__mensaje--saliente"
          style={{ animationDelay: `${14 + 2 * Math.random()}s` }}
        >
          {mensajesSalientes[1]}
        </div>
        <div
          ref={elemMsg5}
          className="Celular__mensaje Celular__mensaje--entrante"
          style={{ animationDelay: `${17 + 2 * Math.random()}s` }}
        >
          {mensajesEntrantes[2]}
        </div>
        <div
          ref={elemMsg6}
          className="Celular__mensaje Celular__mensaje--saliente"
          style={{ animationDelay: `${21 + 2 * Math.random()}s` }}
        >
          {mensajesSalientes[2]}
        </div>
      </div>
    </div>
  )
}

export default Celular
