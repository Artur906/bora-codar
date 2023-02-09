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
    action: 'clearEntry',
  },
  {
    value: 'C',
    action: 'clear'
  },
  {
    value: '%',
    path: percent,
    action: 'placeCharacter',
    type: 'svg'
  },
  {
    value: '/',
    path: divide,
    action: 'placeCharacter',
    type: 'svg'
  },
  {
    value: 7,
    action: 'placeCharacter',
    type: 'number'
  },
  {
    value: 8,
    action: 'placeCharacter',
    type: 'number'
  },
  {
    value: 9,
    action: 'placeCharacter',
    type: 'number'
  },
  {
    value: '*',
    path: X,
    action: 'placeCharacter',
    type: 'svg'
  },
  {
    value: 4,
    action: 'placeCharacter',
    type: 'number'
  },
  {
    value: 5,
    action: 'placeCharacter',
    type: 'number'
  },
  {
    value: 6,
    action: 'placeCharacter',
    type: 'number'
  },
  {
    value: '-',
    path: minus,
    action: 'placeCharacter',
    type: 'svg'
  },
  {
    value: 1,
    action: 'placeCharacter',
    type: 'number'
  },
  {
    value: 2,
    action: 'placeCharacter',
    type: 'number'
  },
  {
    value: 3,
    action: 'placeCharacter',
    type: 'number'
  },
  {
    value: '+',
    path: plus,
    action: 'placeCharacter',
    type: 'svg'
  },
  {
    path: plusMinus,
    action: 'invertSignal',
    type: 'svg'
  },
  {
    value: 0,
    action: 'placeCharacter',
    type: 'number'
  },
  {
    value: '.',
    action: 'placeCharacter',
    type: 'number'
  },
  {
    path: equals,
    action: 'equals',
    type: 'svg'
  },
]