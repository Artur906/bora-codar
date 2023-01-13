import { Container } from "../../common/styled"
import { Card } from "./styled"
import Info from "./components/Info"
import Product from "./components/Product"

export default function Challenge02() {
  return (
    <Container >
      <Card >
        <Product />
        <Info />
      </Card>
    </Container>
  )
}