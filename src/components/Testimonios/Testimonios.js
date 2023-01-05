import './Testimonios.css'
import fotoPabloMagerkurth from '../../assets/images/testimonios/Pablo_Magerkurth_RS.jpeg'
import fotoDiegoMoreira from '../../assets/images/testimonios/Diego_Moreira_SS.jpeg'
import fotoMaxHasenohr from '../../assets/images/testimonios/Max_Hasenohr_NO.png'
import { InlineIcon } from '@iconify/react'

const testimonios = [
  {
    foto: fotoPabloMagerkurth,
    nombre: 'Pablo Magerkurth',
    cargo: 'Subgerente Servicio al Cliente',
    institucion: 'Redsalud',
    cita: 'Me gusta trabajar con el equipo de Cero porque son abiertos, rápidos y tienen iniciativa trayendo excelentes discusiones.',
  },
  {
    foto: fotoDiegoMoreira,
    nombre: 'Diego Moreira',
    cargo: 'Gerente Comercial y Desarrollo',
    institucion: 'Sanasalud',
    cita: 'Gracias a Cero, hoy tenemos un canal de comunicación efectivo con más del 90% de nuestros pacientes y por una fracción del costo de un call center.',
  },
  {
    foto: fotoMaxHasenohr,
    nombre: 'Max Hasenohr',
    cargo: 'Gerente Comercial y Marketing',
    institucion: 'Norden Dental Care',
    cita: 'Con Cero logramos automatizar el proceso de confirmación de citas de nuestras clínicas y reducir las inasistencias de pacientes, liberando a nuestros ejecutivos de atención al cliente para casos más complejos.',
  },
]

const Testimonios = () => {
  return (
    <div className="Testimonios">
      <div className="Testimonios__textos">
        <h3 className="Testimonios__subtitulo">
          Lo que dicen quienes han confiado en nosotros
        </h3>
        {testimonios.map((testimonio) => (
          <div
            key={`contenedor-testimonio-${testimonio.nombre}`}
            className="Testimonios__contenedor_cita"
          >
            <InlineIcon
              className="Testimonios__icono_cita"
              icon="mdi:format-quote-close"
            />
            <p className="Testimonios__cita">{testimonio.cita}</p>
            <img
              className="Testimonios__avatar"
              src={testimonio.foto}
              alt={`Foto ${testimonio.nombre}`}
            />
            <p className="Testimonios__nombre">{testimonio.nombre}</p>
            <p className="Testimonios__cargo">
              {testimonio.cargo} en {testimonio.institucion}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonios
