import { InlineIcon } from '@iconify/react'
import './CasosDeUso.css'

const CasosDeUso = ({ cerrar }) => {

  return (
    <div
      className="CasosDeUso__overlay" 
      onClick={cerrar}
    >
      <div
        className="CasosDeUso"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="CasosDeUso__boton_cerrar"
          onClick={cerrar}
        >
          <InlineIcon icon="mdi:close" />
        </button>
      </div>
    </div>
    
  )
}

export default CasosDeUso