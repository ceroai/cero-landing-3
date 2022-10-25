import { useDispatch } from 'react-redux'
import { esconderCasosDeUso } from '../../../redux/ducks/modals'
import './CasosDeUso.css'

const CasosDeUso = () => {

  const dispatch = useDispatch()

  return (
    <div
      className="CasosDeUso__overlay" 
      onClick={() => dispatch(esconderCasosDeUso())}
    >
      <div
        className="CasosDeUso"
        onClick={e => e.stopPropagation()}
      >
        <iframe src="https://cero-landing-2.netlify.app/expo" style={{ width: '100%', height: '100%' }} title="Expo" />
      </div>
    </div>
    
  )
}

export default CasosDeUso