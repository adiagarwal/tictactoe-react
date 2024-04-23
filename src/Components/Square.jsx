import React from "react"
import "../style.css"

export const Square = (props) =>{
    const handleClick = props.handleClick
    const index = props.index
    const onclick = ()=>{
        handleClick(index)
    }
    return (
        <button className="square" onClick={onclick}>{props.value}</button>
    )
}