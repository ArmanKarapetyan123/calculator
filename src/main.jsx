import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Header/header'
import NumberList from './NumberGrid/numberList'

const calculatorButtons = [
  { text: "C", id: 1 },
  { text: "7", id: 2 },
  { text: "4", id: 3 },
  { text: "1", id: 4 },
  { text: "0", id: 5 },
  { text: "/", id: 6 },
  { text: "8", id: 7 },
  { text: "5", id: 8 },
  { text: "2", id: 9 },
  { text: ".", id: 10 },
  { text: "*", id: 11 },
  { text: "9", id: 12 },
  { text: "6", id: 13 },
  { text: "3", id: 14 },
  { text: "=", id: 15 },
  { text: "-", id: 16 },
  { text: "+", id: 17 },
];

const jsxElement = (
  <div className='calculator'>
      <Header/>
      <NumberList innerTexts={calculatorButtons}/>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(jsxElement)
