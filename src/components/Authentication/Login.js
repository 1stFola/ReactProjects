import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import Authentication from '../../Authentication';
import Budget from '../../Budget';
import NewBugBalance from '../Budget/NewBugBalance';

const Login = (props) => {


// const [show, setShow] = useState(false)


  let { setAlert, setOwner} = props

  let history = useHistory();

  const[userDetails, setUserDetails] = useState({identity: "", password: ""})

  const handleUserInput = (e) => {

    setUserDetails({...userDetails, [e.target.name]: e.target.value})

  }

  const handleLogin = () => {

  let usersRepository = JSON.parse(localStorage.getItem("users"))
  let user;

  //  let user = {}

  let isValid = usersRepository.some((userObject) => { 

      let idCheck = (userObject?.email === userDetails.identity || 
        userObject?.username === userDetails?.identity)
      
      let passwordCheck = (userObject.password === userDetails.password)

      if (idCheck && passwordCheck) {
        user = userObject
      }
      return idCheck && passwordCheck


  }) // THE SYNTAX HERE CAN BE HARNESSED TO CONFIRM IF EMAIL ALREDY EXIST FOR USER REGISTRATION

 let {identity} = userDetails

   isValid ?
            history.push(`/dashboard/${user.username}/?id=${identity}`) : 
   setAlert( { ishow: true, status: "error", message: "User Details Incorrect" })

   setTimeout(
     ()=> setAlert({ishow: false, status: "", message: "" }), 
     5000)


    //  setOwner(user.username)

  }
  
  return (
      <>
   
 

    <div className='auth-register'>
       <label>Email or Username</label>
       <input name="identity" onChange={handleUserInput}/>
       <label>Password</label>
       <input name="password" type="password" onChange={handleUserInput}/>
       <button onClick={handleLogin}>Login</button>
   </div> 
  

    {/* {!props.show && <Budget />} */}

    </>
 )
  }


/*
const Login = (props) => {

let {setAlert, setShow} = props

  const [userInfo, setUserInfo] = useState({username: "", password: ""})


  const handleUserInput = (e) => {
    setUserInfo({...userInfo, [e.target.name]: e.target.value})
  }

  



  const handleLogin = () => {
    let {username, password} = userInfo

// (1) Validate username and password exist


try{
    let usersRepository
    usersRepository = JSON.parse(localStorage.getItem("users"))
    let isUserExist = usersRepository.some((user) => user.username === username)
    let isPasswordCorrect = usersRepository.some((user) => user.password === password)

    if(!isUserExist || !isPasswordCorrect){

    

    setAlert({ishow: true, status: "error", message: "Invalid Details"})

    return
    }

    let oldUsersRepository = [userInfo, ...usersRepository]
    localStorage.getItem("users", JSON.stringify(oldUsersRepository))
    setAlert({ishow: true, status: "success", message: "Login Successful"})
    setShow(true)
}catch(error){
    localStorage.getItem("users", JSON.stringify([userInfo]))
   
    setAlert({ishow: true, status: "success", message: "Login Unsuccessful"})

}
    

}


  return (
 
     <div className='auth-register'>
        <label>Username</label>
        <input name="username" onChange={handleUserInput}/>
        <label>Password</label>
        <input name="password" type="password" onChange={handleUserInput}/>
        <button onClick={handleLogin}>Login</button>
    </div> 
    
  )
}

*/

export default Login