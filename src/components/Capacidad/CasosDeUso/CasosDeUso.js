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
        {/* <button
          className="CasosDeUso__boton_cerrar"
          onClick={cerrar}
        >
          <InlineIcon icon="mdi:close" />
        </button> */}
        <iframe src="https://cero.ai/expo" style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
    
  )
}

export default CasosDeUso