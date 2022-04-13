import React, {useEffect, useState} from 'react'

const Exchange = (props) => {
    const {balance, setBalance} = props

    const [exchange, setExchange] = useState([])
    const [rates, setRates] = useState({})
    const [option, setOption] = useState("")

    const handleConversion = () => {
        setBalance(balance * rates [option])
    }

    const handleOptionChange = (e) => {
        setOption(e.target.value)
    }

    let values;
    useEffect(()=>{
        fetch('https://v6.exchangerate-api.com/v6/b3843568e31ebe05ccec9cf5/latest/NGN')
        .then(response => response.json())
        .then(data => {
            values = Object.keys(data.conversion_rates)
            setBalance(balance * data.conversion_rates[values[0]])
            setExchange(values);
            setRates(data.conversion_rates)
        })
       
    }, [])

    useEffect(() => {
        if(option === ""){
            return 
        }
        handleConversion()
    }, [option])


    return (
        <div>
                <select style={{borderRadius: "10px", color: "white", backgroundColor: "rgba(100, 29, 182, 0.685" }} onChange={handleOptionChange}> 
                {exchange.map((value, index)=>           
                    <option key={index}>{value}</option>
                )}
                </select>
        </div>
      )
    }

     
    export default Exchange