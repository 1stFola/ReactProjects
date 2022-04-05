import React, { useState } from 'react'
import './Budget.css'
import BudgetBalance from './components/Budget/BudgetBalance'
import BudgetBody from './components/Budget/BudgetBody'
import BudgetEntry from './components/Budget/BudgetEntry'

const Budget = () => {
    const [balance, setBalance] = useState(0)

  return (
    <div className='budget-container'>
        <BudgetBalance balance={balance} setBalance={setBalance} />
        <BudgetBody balance={balance} setBalance={setBalance}/>
    </div>
  )
} 

export default Budget

//Set balance is used, but it's not being used by the component that defined it.