import { useState } from "react";
import { Container } from "../../../common/styled";
import Button from "./components/Button";
import { keyData } from "./keyData";
import { Calculator, Card, Keys, Screen } from "./styled";
import equals from "./assets/result-equal.svg"

export default function Challenge05() {
  const [expression, setExpression] = useState('12 + 54 - 125')
  const [result, setResult] = useState()

  const actions = {
    placeCharacter: (character, type) => {
      setExpression(lastExpression => {
        const splitedExpression = expression.trim()
        const lastPosition = splitedExpression.length - 1

        if (type !== 'number' && splitedExpression[lastPosition] !== character) {
          return `${lastExpression} ${character} `
        } else if (type === 'number') {
          return lastExpression + character
        }
        return lastExpression
      })
    },
    clear: () => {
      setExpression('')
      setResult()
    },
    clearEntry: () => {
      setExpression(lastExpression => {
        if (lastExpression[lastExpression.length - 1] === ' ') {
          return lastExpression.slice(0, -2)
        }
        return lastExpression.slice(0, -1)
      })
    },
    equals: () => {
      setResult(() => {
        try {
          return eval(expression)
        } catch (err) {
          return 'ups..'
        }
      })
    }
  }

  return (
    <Container>
      <Card>
        <Calculator>
          <Screen>
            <div className="expression">{expression}</div>
            <div className="result">
              <img src={equals} alt="equals" />
              <span>
                {result}
              </span>
            </div>
          </Screen>
          <Keys className="buttons">
            {keyData.map((data, index) => {
              return (
                <Button
                  key={data.value ?? data.path + index}
                  path={data.path}
                  value={data.value}
                  type={data.type}
                  callback={() => actions[data.action](data.value, data.type)}
                />
              )
            })}
          </Keys>
        </Calculator>
      </Card>
    </Container>
  )
}