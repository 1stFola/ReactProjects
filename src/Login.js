import React, { useEffect, useState } from 'react'
import './Login.css'
import Budget from './Budget'


 
const Login = () => {

const [authentication, setAuthentication] = useState({userName: "", password: ""})
const [show, setShow] = useState(false);

console.log("Top side" + authentication.userName, + authentication.password )


  const handleUserNameChange = (e) => {
      setAuthentication({...authentication, [e.target.key]:  e.target.value})
    }
    console.log("Username side" + authentication.userName)



const handlePasswordChange = (e) => {

    setAuthentication({...authentication, [e.target.key]:  e.target.value})
  }
console.log("password side" + authentication.password)
   

const checkInput = () => {

// e.preventDefault()

let loginCredentials = {...authentication};

console.log("Top side" + loginCredentials.userName, + loginCredentials .password )


if(loginCredentials.userName === "Fola" && 
   loginCredentials.password === "1stfola"){

alert("Logged in Successfully")
setShow(true)
}

else{
  alert("User Name or Password is incorrect please enter correct data")

}

}


  return (
    <>
    {!show ? 
    <div className="login-wrapper">
    <h1>Please Log In</h1>
    <form onSubmit={checkInput}>
      <label>
        <p>Username</p>
        <input type="text" onChange={handleUserNameChange} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={handlePasswordChange} />
      </label>
      <div>
        <button type="submit" >Submit</button>
      </div>
    </form>
    </div> : <Budget show={show} setShow={setShow}/>
  }
   </>
  )
}



export default Login
