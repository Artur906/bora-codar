import { ProductInfos, Wrapper } from "./styled"

export default function Info() {
  return (
    <Wrapper>
      <ProductInfos>
        <span>CÓDIGO: 42404</span>
        <h1>Sofá Margot II - Rosé</h1>
        <p>R$ 4.000</p>
      </ProductInfos>
      <button>ADICIONAR À CESTA</button>
    </Wrapper>
  )
}