import React, { useState } from 'react'
import './BudgetBody.css'

const BudgetEntry = (props) => {
    let {budget, setBudget, balance, setBalance} = props 

    const [input, setInput] = useState({budgetName: "", budgetAmount: "", budgetDescription: "", date: "" })

    const handleInput = (e) => {

    setInput ({...input, [e.target.name]: e.target.value})


    }

   const createBudget = () => {
        let budgetData = [{...input, date: Date.now() }, ...budget]
        let savedBudget = {...input}


        if (isNaN(savedBudget.budgetAmount)){
            alert("Input must be digits.. no commas, currency symbols etc.");
        } else
        if(!(balance-savedBudget.budgetAmount < 0)){
        setBudget(budgetData)

        let newBalance = balance - savedBudget.budgetAmount
        setBalance(newBalance)

    }
        else setBalance((initial) => {
            setTimeout(() => setBalance(initial), 5000)
            return "Budget Limit Exceeded!"

        })
    
}


    return (
    <div className='budget-entry-container'>
        <div className='budgetEntry'>
            <p>Budget Name</p>
            <input name='budgetName' onChange={handleInput} />
        </div>
        <div className='budgetEntry'>
            <p>Budget Amount</p>
            <input name='budgetAmount' onChange={handleInput} />
        </div>
        <div className='budgetEntry'>
            <p>Name Description</p>
            <input name='budgetDescription' onChange={handleInput} />
        </div>
        <button onClick={createBudget}>Enter</button>
        
        {/* <button onClick={createBudget}>Enter</button> */}
    </div>
  )

  
}

export default BudgetEntry



/*
 cost Task = (props) => {

    const [t, setT] = useState("")


 const handleSubmit = (e) => {
     e.preventDefault();
     props.submitText(t)
     console.log("Submitted")
 }

 return(

    <div className = "container"> 
    
    <form onSubmit={handleSubmit}>
    <div> {props.decs}</div>
    <input value={t} onChange={(e) => setT(e.target.value)}
    <button> Submit </button>
    </form>
    <div/>
 )

 }

const App = () => {

    const [submittedText, setSubmittedText] = useState("")

    return (
            <>
            <div> Submitted: {submittedText} </div>
            <Task desc="From App" submitText ={submittedText}
            </>

    )

    }




}



*/