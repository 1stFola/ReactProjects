import React, {useState} from 'react';
import { toDatetimelocal } from '../../util'
import './BudgetBody.css'
import axios from "axios";



const BudgetDetails = (props) => {
    let { budget, setBudget , balance, setBalance, selectOpt, allBudget } = props 

    const [input, setInput] = useState("")

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    
    const showAll = () => {
                
    setBudget(allBudget)

}

    const filterTable = () => {
        let newObject = [...budget]
        // let regex = new RegExp("[^A-Za-z0-9_.]")    || input === data["budgetName"].includes(regex)
      
        setBudget(newObject.filter((data) => input === data["budgetDescription"] || input ===  data["budgetName"] || input ===  data["budgetAmount"] ))
        // show all of the data (value) whenever user Input is equal or matches any key in the 
        //data array (data represents newObject above)
    }
  


    const deleteRow =  (objectID, budgetAmount) => {
        let newObject = [...budget]
        setBudget(newObject.filter((data, index) => index !== objectID))
        // show all of the data (value) for the index(s) that does not have the selected objectID 

        let reversedBalance = balance + budgetAmount
        setBalance(reversedBalance)      

    }


 return (
    <div className='budget-details-container'>
        <div>

        <h1> Details  </h1>

          <div>

            <label>Search For: </label>
            <input onChange={handleInput} />                        
            <button onClick={filterTable} className="search" > Search</button>
            <button onClick={showAll} className="show-all" > Show All</button>

          </div>
        </div>

        
        
        <section  style={{overflowY:"auto", height:"40vh"}} >


        {budget.length > 0 ?
        <table>
            <tr className='table-header'>
                <th>Date</th>
                <th>Budget Name</th>
                <th >Amount</th>
                <th>Description</th>
            <th></th>
            </tr>

            {budget.map((data, index) => 
            <tr key = {index} className ='data-row' >
                <td>{toDatetimelocal(data.date)}</td>
                <td>{data.budgetName}</td>
                <td>{selectOpt} {data.budgetAmount}</td>   
                <td>{data.budgetDescription}</td>
                <td>
                <button onClick = {() => {deleteRow(index,  +data.budgetAmount)}} style={{backgroundColor: "red", color: "white", padding: "2px 10px", border: "unset"}} > 
                    Delete </button>
                </td>

            </tr>)}
        </table>             
        : "No data entry yet"}

        </section>
       
    </div>
  )
            }

export default BudgetDetails
