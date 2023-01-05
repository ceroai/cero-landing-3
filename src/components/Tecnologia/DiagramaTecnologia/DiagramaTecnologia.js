import captura1 from '../../../assets/images/feedback-chat.jpg'
import captura2 from '../../../assets/images/feedback-respuestas.jpg'
import './DiagramaTecnologia.css'

const DiagramaTecnologia = () => {
  return (
    <div className="DiagramaTecnologia">
      <img
        className="DiagramaTecnologia__captura"
        src={captura1}
        alt="Feedback"
      />
      <img
        className="DiagramaTecnologia__captura DiagramaTecnologia__captura--back"
        src={captura2}
        alt="Feedback"
      />
    </div>
  )
}

export default DiagramaTecnologia
