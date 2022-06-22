import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './BudgetBalance.css'
import Exchange from './Exchange'


const BudgetBalance = (props) => {
  const [input, setInput] = useState("")

let {balance, setBalance} = props


const handleInput = (e) => {
  if (isNaN(e.target.value)){
    alert("Input must be digits... no commas, currency symbols etc.");
  }else

  setInput(parseInt(e.target.value) + balance)
}


// useEffect(()=>{
//   fetch('https://v6.exchangerate-api.com/v6/b3843568e31ebe05ccec9cf5/latest/USD')
//   .then(
//     (data) => data.json()
//   ).then(
//       data => console.log(data)
//   )
//   }, []) // --> EMPTY DEPENDENCY ARRAY MEANS "DON'T RENDER AGAIN AFTER THE INITIAL PAGE LOADING"

useEffect(()=> {
  axios.get('https://v6.exchangerate-api.com/v6/b3843568e31ebe05ccec9cf5/latest/USD').then(
    (response)=> console.log(response.data)
      )
  },[])

useEffect(() => {
  console.log("I Just Mounted @ Budget balance")

  return () => {
  console.log("I Just UnMounted @ Budget balance")

  }
}, [balance]) // --> FILLED DEPENDENCY ARRAY MEANS "LISTEN TO THE CHANGE THAT HAPPENED BASED ON THE CONTENT INSIDE THE DEPENDECY ARRAY AND RE-RENDER"

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
            < Exchange balance={balance} setBalance={setBalance} />
            <button onClick={() => setBalance(input)} >Update Balance</button>
        </div>
           
    </div> 
  )
}

export default BudgetBalance

//Set balance is used, but it's not being used by the component that defined it.

