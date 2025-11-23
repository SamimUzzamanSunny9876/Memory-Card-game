import { GameHeader } from "./component/GameHeader"
import { Card } from "./component/Card";


const cardValues = [
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
];

function App() {
  return (
    <>
     <GameHeader score={3} moves ={10}/>
         
       <div className="cards-grid">
        {
          cardValues.map((card) => (
            <Card card={card}/>
          ))
        }  
       </div>
         
    </>
  )
}

export default App
