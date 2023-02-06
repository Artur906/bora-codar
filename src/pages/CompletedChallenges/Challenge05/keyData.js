import divide from './assets/divide.svg'
import percent from './assets/percent.svg'
import X from './assets/X.svg'
import minus from './assets/minus.svg'
import plusMinus from './assets/plus-minus.svg'
import plus from './assets/plus.svg'
import equals from './assets/equals.svg'

export const keyData = [
  {
    value: 'CE',
    action: 'clear everithing',
  },
  {
    value: 'C',
    action: 'clear'
  },
  {
    value: percent,
    action: 'percent',
    type: 'svg'
  },
  {
    value: divide,
    action: 'divide',
    type: 'svg'
  },
  {
    value: 7,
    type: 'number'
  },
  {
    value: 8,
    type: 'number'
  },
  {
    value: 9,
    type: 'number'
  },
  {
    value: X,
    action: 'multiply',
    type: 'svg'
  },
  {
    value: 4,
    type: 'number'
  },
  {
    value: 5,
    type: 'number'
  },
  {
    value: 6,
    type: 'number'
  },
  {
    value: minus,
    action: 'minus',
    type: 'svg'
  },
  {
    value: 1,
    type: 'number'
  },
  {
    value: 2,
    type: 'number'
  },
  {
    value: 3,
    type: 'number'
  },
  {
    value: plus,
    action: 'plus',
    type: 'svg'
  },
  {
    value: plusMinus,
    action: 'plusMinus',
    type: 'svg'
  },
  {
    value: 0,
    type: 'number'
  },
  {
    value: ',',
    type: 'character'
  },
  {
    value: equals,
    action: 'equals',
    type: 'svg'
  },
]