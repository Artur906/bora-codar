import divide from './assets/divide.svg'
import percent from './assets/percent.svg'
import X from './assets/X.svg'
import minus from './assets/minus.svg'
import plusMinus from './assets/plus-minus.svg'
import plus from './assets/plus.svg'
import equals from './assets/equals.svg'

interface dataModel {
  id: number,
  background?: string,
  color?: string,
  type?: string, 
  path?: string, 
  value?: string | number,
  action: 'clearEntry' | 'clear' | 'placeCharacter' | 'invertSignal' | 'equals',
}

export const keyData: dataModel[] = [
  {
    id: 0,
    value: 'CE',
    action: 'clearEntry',
    color: '#975DFA'
  },
  {
    id: 1,
    value: 'C',
    action: 'clear'
  },
  {
    id: 2,
    value: '%',
    path: percent,
    action: 'placeCharacter',
    type: 'svg'
  },
  {
    id: 3,
    value: '/',
    path: divide,
    action: 'placeCharacter',
    background: '#462878',
    type: 'svg'
  },
  {
    id: 4,
    value: 7,
    action: 'placeCharacter',
    type: 'number'
  },
  {
    id: 5,
    value: 8,
    action: 'placeCharacter',
    type: 'number'
  },
  {
    id: 6,
    value: 9,
    action: 'placeCharacter',
    type: 'number'
  },
  {
    id: 7,
    value: '*',
    path: X,
    action: 'placeCharacter',
    background: '#462878',
    type: 'svg'
  },
  {
    id: 8,
    value: 4,
    action: 'placeCharacter',
    type: 'number'
  },
  {
    id: 9,
    value: 5,
    action: 'placeCharacter',
    type: 'number'
  },
  {
    id: 10,
    value: 6,
    action: 'placeCharacter',
    type: 'number'
  },
  {
    id: 11,
    value: '-',
    path: minus,
    action: 'placeCharacter',
    background: '#462878',
    type: 'svg'
  },
  {
    id: 12,
    value: 1,
    action: 'placeCharacter',
    type: 'number'
  },
  {
    id: 13,
    value: 2,
    action: 'placeCharacter',
    type: 'number'
  },
  {
    id: 14,
    value: 3,
    action: 'placeCharacter',
    type: 'number'
  },
  {
    id: 15,
    value: '+',
    path: plus,
    action: 'placeCharacter',
    background: '#462878',
    type: 'svg'
  },
  {
    id: 16,
    path: plusMinus,
    action: 'invertSignal',
    type: 'svg'
  },
  {
    id: 17,
    value: 0,
    action: 'placeCharacter',
    type: 'number'
  },
  {
    id: 18,
    value: '.',
    action: 'placeCharacter',
    type: 'number'
  },
  {
    id: 19,
    path: equals,
    action: 'equals',
    background: '#7F45E2',
    type: 'svg'
  },
]