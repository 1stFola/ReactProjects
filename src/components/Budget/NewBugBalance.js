import React, {useEffect, useState} from 'react';
import "./NewBugBalance.css"
import axios from "axios";
import Login from '../../Login';
import { useHistory } from "react-router-dom";


const NewBugBalance = (props) => {
    const [input,setInput] = useState("")
    const [exchangeRate, setExchangeRate] = useState({})
    const [selectOption, setSelectOption] = useState("")


    let {budget, setSelectOpt} = props

const history = useHistory();

    const logOut = () => {

    alert("You will be logged out of this page")

        history.push('/')
    }

    const handleInput = (e) =>{
        setInput(e.target.value)
    }

    const handleSelect = (e) => {
        selectOption === "" ? 
           props.setBalance(props.balance * exchangeRate[e.target.value])
           : props.setBalance(props.balance / exchangeRate[selectOption] * exchangeRate[e.target.value])

          

           for(let i = 0; i < budget.length; i++){
            budget[i]["budgetAmount"] = budget[i]["budgetAmount"] / exchangeRate[selectOption] * exchangeRate[e.target.value]
        }
           setSelectOption(e.target.value)
           setSelectOpt(e.target.value)                                                     
      
      }

    useEffect(()=>{
        axios.get('https://v6.exchangerate-api.com/v6/1c049b4a9a76df52f795dea0/latest/NGN')
        .then(
            (response) => {
                setExchangeRate(response.data.conversion_rates);
                setSelectOption(Object.keys(response.data.conversion_rates)[0]);
            }
        )
        },[])

    useEffect(()=>{
        console.log('I just MOUNTED @ Budget Balance')
        return ()=>{
            console.log('I just UNMOUNTED @ Budget Balance')
            }
        },
        [props.balance])

    return (
        <>
        <div className="budgetBalance">
            <div className="balance">
            {props.balance}
            </div>
            <select className="balance-dropdown" onChange={handleSelect}>
                {Object.keys(exchangeRate).length > 0 &&
                    Object.keys(exchangeRate).map(
                        (data,index) => <option key={index}>{data}</option>
                    )}
            </select>
            <div className="balance-button">
                <input onChange={handleInput}/>                
                <button onClick={() => props.setBalance(input)}>Update Balance</button>
            </div>
            
            <button className='btnSuccess' onClick={logOut} >Logout</button>

        </div>
        {/* {!props.show && <Login/>} */}
        </>
    );
};

export default NewBugBalance;
