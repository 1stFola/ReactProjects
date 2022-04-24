import React, { useState } from 'react'
import Login from './components/Authentication/Login'
import Register from './components/Authentication/Register'
import "./Authentication.css"
import Budget from './Budget'

const Authentication = (props) => {
    // const [auth, setAuth] = useState("login")
    const [auth, setAuth] = useState("register")

    const [alert, setAlert] = useState({ishow: false, status: "", message: ""})

    

// const swicthHandler = () => {
//         if(auth === "login"){
//             setAuth('register')
//         }else{
//             setAuth('login')
//         }

        const swicthHandler = () => {
            if(auth === "register"){
                setAuth('login')
            }else{
                setAuth('register')
            }


    }
  return (
            <>
             {/* {!props.show ?  */}
            
        <div className='auth-container'> 
            <div className='auth-body'> 
            <div style={{display: 'flex', justifyContent: 'space-between' }}>

            {alert.ishow && <div id='alrt' className='alert' 
                style= { alert.status === "error" ?
                {backgroundColor: 'red' } : 
                {backgroundColor: 'teal'}  }  >
              {alert.message}     
                </div> }

                        
            <button onClick={swicthHandler}>{auth === "login" ? "Register" : "Login"}</button>
            </div>
            { auth === "login" ? <Login setOwner={props.setOwner} setAlert={setAlert} /> : <Register setAlert={setAlert}  /> }
            </div>
        </div> 
        
         {/* : <Budget /> } */}

        </>
  )
}

export default Authentication