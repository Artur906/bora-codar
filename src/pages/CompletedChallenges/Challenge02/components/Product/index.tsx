import { useState } from "react"
import button360 from "../../assets/icons/360-button.svg"
import closeButton from "../../assets/icons/close-button.svg"
import sofa from "../../assets/images/sofa.png"
import sofaGirante from "../../assets/images/sofa-girante.gif"
import { Aside } from "./styled"

export default function Product() {
  const [isVisualisationActive, setIsVisualisationActice] = useState(false)

  return (
    <Aside>
      <img src={isVisualisationActive ? sofaGirante : sofa} alt="um sofá bem bonito, com uma cor rosada" className="product-img" />
      <button onClick={() => setIsVisualisationActice(!isVisualisationActive)}>
        <img src={isVisualisationActive ? closeButton : button360} alt="um botão para mudar o tipo de visualização do produto" />
      </button>
    </Aside>
  )
}