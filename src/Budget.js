import React, { useState } from 'react'
import './Budget.css'
import BudgetBalance from './components/Budget/BudgetBalance'
import BudgetBody from './components/Budget/BudgetBody'
import BudgetEntry from './components/Budget/BudgetEntry'
import Exchange from './components/Budget/Exchange'

import NewBugBalance from './components/Budget/NewBugBalance'
import "./components/Budget/NewBugBalance.css"


// useState (1) preserve the value between the renders and (2) It triggers a re-render
// by default, useEffect will run after every render.



const Budget = (props) => {
    const [balance, setBalance] = useState(0)
    const [selectOpt, setSelectOpt] = useState("NGN")

    const [budget, setBudget] = useState([])


    let { owner} = props




   


  return (
    <div className='budget-container'>
        {/* <BudgetBalance balance={balance} setBalance={setBalance} /> */}
        {/* <NewBugBalance balance={balance} setBalance={setBalance} show={show} setShow={setShow} /> */}

        <NewBugBalance budget={budget} setSelectOpt={setSelectOpt} balance={balance} setBalance={setBalance}/>
        <BudgetBody budget={budget} setBudget={setBudget} selectOpt={selectOpt} owner={owner} balance={balance} setBalance={setBalance}/> 
        </div> 
  )
} 

export default Budget

//Set balance is used, but it's not being used by the component that defined it.


// useState displays/render the Initial value/state set for the component (d zero) awaits an event listener and the ACTION that happens, 
// useState then triggers a re-render to display the ACTION (result)
// useEffect now runs

// useEffect is used when we want to set up side effect --> that is, 
// --> we want to allow things to happen on the page, different from the script written for the components

