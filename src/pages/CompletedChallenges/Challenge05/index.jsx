import { Container } from "../../../common/styled";
import Button from "./components/Button";
import { keyData } from "./keyData";
import { Calculator, Card, Keys, Screen } from "./styled";

export default function Challenge05() {
  return (
    <Container>
      <Card>
        <Calculator>
          <Screen>

          </Screen>
          <Keys className="buttons">
            {keyData.map((data, index) => {
              return <Button key={data.value + index} value={data.value} type={data.type} />
            })}
          </Keys>
        </Calculator>
      </Card>
    </Container>
  )
}