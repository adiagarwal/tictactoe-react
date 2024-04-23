import React, { useEffect, useState } from 'react';
import {Square} from "./Square"

export const Board = () =>{
  const player1 = "X"
  const player2 = "O"
  
  const x_turn = true

  const [winner,setWinner] = useState(null)

  const [x_is_next ,setXTurn] = useState(x_turn)
  const [value , setValue] = useState(player1)
  const [resultant_array , setResultArray] = useState([null , null , null, null , null , null , null , null , null])
  const winning_combo = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

  const changePlayerTurn = (index) =>{
    if(x_is_next){
      if(resultant_array[index] !== "X" && resultant_array[index] !== "O"){
        setValue(player1)
        resultant_array.splice(index,1,player1)
      }
    }
    else{
      if(resultant_array[index] !== "X" && resultant_array[index] !== "O"){
        setValue(player2)
        resultant_array.splice(index,1,player2)
      }
    }
    setXTurn(!x_is_next)
  }

  useEffect(()=>{
    (()=>{
     for(let combo of winning_combo){
      const [a,b,c] = combo
      if(resultant_array[a] && resultant_array[a] === resultant_array[b] && resultant_array[b] === resultant_array[c]){
        console.log(combo)
        setWinner(resultant_array[a])
        return 
      }
     }
    })()
  },[resultant_array,winning_combo])

  return (
    <div>
       <div className="container">
      <div  className="button-grid" style={{margin : "10px"}}>
        <Square value={resultant_array[0]}  handleClick = {changePlayerTurn} index={0}/>
        <Square value={resultant_array[1]} handleClick = {changePlayerTurn}  index={1}/>
        <Square value={resultant_array[2]} handleClick = {changePlayerTurn}  index={2}/>
      </div>
      <div className="button-grid" style={{margin : "10px"}}>
        <Square value={resultant_array[3]} handleClick = {changePlayerTurn} index={3}/>
        <Square value={resultant_array[4]} handleClick = {changePlayerTurn} index={4}/>
        <Square value={resultant_array[5]} handleClick = {changePlayerTurn} index={5}/>
      </div>
      <div className="button-grid" style={{margin : "10px"}}>
        <Square value={resultant_array[6]} handleClick = {changePlayerTurn} index={6}/>
        <Square value={resultant_array[7]} handleClick = {changePlayerTurn} index={7}/>
        <Square value={resultant_array[8]} handleClick = {changePlayerTurn} index={8}/>
      </div>
      </div>
      <h4>
      {`Winner : ${winner !== null ? winner : "?"}`}
      </h4>
    </div>
     
  );
}

