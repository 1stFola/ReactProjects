import React from 'react'
import { toDatetimelocal } from '../../util'
import './BudgetBody.css'


const BudgetDetails = (props) => {
    let { budget, setBudget , balance, setBalance } = props

    const deleteRow = (objectID, budgetAmount) => {
    
        let newObject = [...budget]
        setBudget(newObject.filter((data, index) => index !== objectID))

        let reversedBalance = balance + budgetAmount
        setBalance(reversedBalance)

    }
    // style={{overflowY:"auto", height:"70vh"


 return (
    <div className='budget-details-container'>
        <h1> Details  </h1>
        
        <section  style={{overflowY:"auto", height:"50vh"}} >


        {budget.length > 0  ?
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
                <td>{data.budgetAmount}</td>
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


// const deleteRow = (e) => {
//     let td = e.target.parentNode;
//     let tr = td.parentNode;

//     tr.parentNode.removeChild(tr);
    
// }