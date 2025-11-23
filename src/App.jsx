import { GameHeader } from "./component/GameHeader"
import { Card } from "./component/Card";
import { useEffect, useState } from "react";


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

  const [cards, setCards] = useState([])

  const initializeGame = () =>{
    const finalCards = cardValues.map((value, index) =>({
      id: index,value,
      isFlipped: false,
      isMatched : false
    }))
    setCards(finalCards);
  };
  useEffect(() => {
    initializeGame()
  }, []) 



  return (
    <>  
     <GameHeader score={3} moves ={10}/>
         
       <div className="cards-grid">
        {
          cards.map((card) => (
            <Card card={card}/>
          ))
        }  
       </div>
         
    </>
  )
}

export default App
