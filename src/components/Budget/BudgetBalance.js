import React, { useState } from 'react'
import './BudgetBalance.css'

const BudgetBalance = (props) => {
  const [input, setInput] = useState("")

let {balance, setBalance} = props


const handleInput = (e) => {
  if (isNaN(e.target.value)){
    alert("Input must be digits.. no commas, currency symbols etc.");
  }else
  setInput(parseInt(e.target.value) + balance)
}

  // const handleInput = (e) => {
  //   setInput(e.target.value)
  // }

  return (
    <div className='budgetBalance'>
    <div className='balance'>
        {props.balance}
    </div>
        <div className='balance-buttons'>
            <input onChange={handleInput} />
            <button onClick={() => setBalance(input)} >Update Balance</button>
        </div>
           
    </div> 
  )
}

export default BudgetBalance

//Set balance is used, but it's not being used by the component that defined it.

{/* <button onClick={() => props.setBalance(input)} >Update Balance</button> */}
