import React from 'react'
import { useState } from 'react'

const Board = () => {
   
const winningCombos = [[0,1,2],[3,4,5], [6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]



   const [emptyBoard, setBoard ]= useState([ null, null,null,null,null,null,null,null,null ])
   const [playerGo , setPlayerGo] = useState(false)
    const [player_A , setPlayer_A] = useState([])
    const  [player_B , setPlayer_B] =useState([])
    const [winner ,setWinner] = useState(false)
    const [message, setMessage]=useState("")
    
  function resetGame(){

    setWinner(true)
    setPlayer_A([])
    setPlayer_B([])
setBoard([ null, null,null,null,null,null,null,null,null ])


  }
  
  
  
  
  
    function  handleClick(e){
e.preventDefault()
if(emptyBoard.includes(null) === false){
    setMessage("Its a draw")
   resetGame()
    return
}



const value = parseInt(e.target.id)


if (emptyBoard[value]!= null){

    alert("You can't play here :(")
    return
}
if(playerGo === false){
setPlayer_A([...player_A , value]) ;
let array = emptyBoard
array.splice(value, 1, "X")
player_A.push(value)
player_A.sort()

setPlayerGo(true)
setWinner(false)
for(let i = 0 ; i <winningCombos.length; i++){

if(winningCombos[i].every(elem =>player_A.includes(elem)) === true){
setMessage("X wins")
resetGame()
}


}


   }else{
    if(emptyBoard.includes(null) === false){
        alert("Game over")
        setMessage("Its a draw")
        resetGame()

        return
    }  

 setPlayer_B([...player_B , value]) ;
   let array = emptyBoard
   array.splice(value, 1, "O")
   player_B.push(value)
   player_B.sort()
   setPlayerGo(false)
  
setWinner(false)
   for(let i = 0 ; i <winningCombos.length; i++){
    if(winningCombos[i].every(elem =>player_B.includes(elem)) === true){
   setMessage("O wins")
   resetGame()
    }
    
    


  


   }
  



}
  }
    

    
  
    
    
    return (
        <>
        <div className='grid'>
        {emptyBoard.map((cell, index)=>
        {return <div type="input" key={index} onClick={handleClick} className="gridLines"  /*data-value={index}*/ id={index}>{cell}</div>}
        )}
    
        </div>
        {!winner?<div></div>:<div className="message">{message}</div>}

        </>
    )
}

export default Board