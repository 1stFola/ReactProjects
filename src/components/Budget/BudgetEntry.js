import React, { useState } from 'react'
import './BudgetBody.css'




const BudgetEntry = (props) => {
    let {budget, setBudget, balance, setBalance, setAllBudget} = props 

    const [input, setInput] = useState({budgetName: "", budgetAmount: "", budgetDescription: "", date: "" })


    const handleInput = (e) => {

    setInput ({...input, [e.target.name]: e.target.value})


       
    }

    
   const createBudget = () => {
    //    let {budgetName, budgetAmount, budgetDescription} = input
    //     if(Object.values({budgetName, budgetAmount, budgetDescription}).some(data => data === "" )){
    //        return
    //     }

        let budgetData = [{...input, date: Date.now() }, ...budget]
        let savedBudget = {...input}



        if (isNaN(savedBudget.budgetAmount)){
            alert("Input must be digits.. no commas, currency symbols etc.");
            console.log(savedBudget.budgetAmount)
        } else
        if(!(balance-savedBudget.budgetAmount < 0)){
        setBudget(budgetData)
        setAllBudget(budgetData)
        
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
            <input name='budgetAmount' type="number" onChange={handleInput} />
        </div>
        <div className='budgetEntry'>
            <p>Name Description</p>
            <input name='budgetDescription' onChange={handleInput} />
        </div>
        <button onClick={createBudget}>Enter</button>
        
    </div>
  )

  
    }

export default BudgetEntry


//Loop to see IF the any item ID we currently have in the state is equal to the ID that the action(payload) brings, do update, else, the items in the state should stay the same



/*

Tutorial by ANJOLA 

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