import React, { useState } from 'react'
import Login from './components/Authentication/Login'
import Register from './components/Authentication/Register'
import "./Authentication.css"

const Authentication = () => {
    const [auth, setAuth] = useState("login")
    const [alert, setAlert] = useState({ishow: false, status: "", message: ""})



const swicthHandler = () => {
        if(auth === "login"){
            setAuth('register')
        }else{
            setAuth('login')
        }

    }
  return (

        <div className='auth-container'> 
            <div className='auth-body'> 
            <div style={{display: 'flex', justifyContent: 'space-between' }}>

            {alert.ishow && <div className='alert' 
                style={alert.status === "error" ?
                {backgroundColor: 'red'} : 
                {backgroundColor: 'teal'}}>
              {alert.message}     
                </div> }


            <button onClick={swicthHandler}>{auth === "login" ? "Login" : "Register"}</button>
            </div>
            { auth === "login" ? <Login setAlert={setAlert} /> : <Register setAlert={setAlert}  /> }
            </div>
        </div>
  )
}

export default Authentication