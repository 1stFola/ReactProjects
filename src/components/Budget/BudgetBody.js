import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './BudgetBody.css'
import BudgetDetails from './BudgetDetails'
import BudgetEntry from './BudgetEntry'

const BudgetBody = (props) => {
   let {balance, setBalance, budget, setBudget, selectOpt } = props  
   
   const [allBudget, setAllBudget] = useState([])
   

   let { identity } = useParams()   

//  let {show, setShow, owner} = props



  return (
    <div className='budget-body'>
        <div className='text-intro'>
        {/* <div> */}
        <h1>{new Date().getHours() < 12 ? "Good Morning!" : new Date().getHours() >= 12 && new Date().getHours() <= 17 ? "Good Afternoon!": "Good Evening"}</h1>
        <h1>{identity}, Welcome To Your Personal Budget!</h1>

        <p>Enter the price, description, and give a special name to your expenditure </p>
        {/* </div> */}
        </div>
        <div className='budget-body-sectioned'>
        <BudgetEntry setAllBudget={setAllBudget} budget={budget} setBudget={setBudget} balance={balance} setBalance={setBalance}/>
        <BudgetDetails setAllBudget={setAllBudget}  allBudget={allBudget} selectOpt={selectOpt} budget ={budget} setBudget={setBudget} balance={balance} setBalance={setBalance}/>
    
        </div>
    </div>
  )
}

export default BudgetBody