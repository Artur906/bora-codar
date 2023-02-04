import { Container } from "../../../common/styled";
import Button from "./components/Button";
import { Calculator, Card, Keys, Screen } from "./styled";

const buttons = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]

export default function Challenge05() {
  return (
    <Container>
      <Card>
        <Calculator>
          <Screen>

          </Screen>
          <Keys className="buttons">
            {buttons.map(button => {
              return <Button value={button} />
            })}
          </Keys>
        </Calculator>
      </Card>
    </Container>
  )
}