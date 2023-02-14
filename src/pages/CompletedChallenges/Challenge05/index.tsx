import { useState } from "react";
import { Container } from "../../../common/styled";
import Button from "./components/Button";
import { keyData } from "./keyData";
import { Calculator, Card, Keys, Screen } from "./styled";
import equals from "./assets/result-equal.svg"

interface Actions {
  [actionName : string]: object,
  placeCharacter(character: string | number, type: string): void,
  clear(): void,
  clearEntry(): void,
  equals(): void,
}

export default function Challenge05() {
  const [expression, setExpression] = useState<string>('')
  const [result, setResult] = useState<number | null>()

  const actions: Actions = {
    placeCharacter: (character: string, type: string): void => {
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
      return
    },
    clear: (): void => {
      setExpression('')
      setResult(null)
    },
    clearEntry: (): void => {
      setExpression(lastExpression => {
        if (lastExpression[lastExpression.length - 1] === ' ') {
          return lastExpression.slice(0, -2)
        }
        return lastExpression.slice(0, -1)
      })
    },
    equals: (): void => {
      setResult(() => {
        try {
          return eval(expression);
        } catch (err) {
          return 'ups..';
        }
      });
    }
  }

  const handleActionSelection = (action: string, value?: string | number, type?: string) => {
    if(action === 'placeCharacter' && (value || value === 0) && type){
      return actions.placeCharacter(value, type)
    }
    if(action === 'clear'){
      return actions.clear()
    }
    if(action === 'clearEntry'){
      return actions.clearEntry()
    }
    if(action === 'equals') {
      return actions.equals()
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
            {keyData.map((data) => {
              return (
                <Button
                  key={data.id}
                  path={data.path}
                  value={data.value}
                  type={data.type}
                  color={data.color}
                  background={data.background}
                  callback={() => handleActionSelection(data.action, data.value, data.type)}
                />
              )
            })}
          </Keys>
        </Calculator>
      </Card>
    </Container>
  )
}