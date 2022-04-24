import React, { useState } from 'react'

const Register = ({setAlert}) => {

   

    // const [userDetails, setUserDetails] = useState({username: "", email: "", password: ""})
    const [userDetails, setUserDetails] = useState({username: "", email: "", password: "", budgetName: "", budgetAmount: "", budgetDescription: "", date: "" })


    const userDetailSetting = () => {
    
    
    }

    const handleUserInput = (e) => {
        setUserDetails({...userDetails, [e.target.name]: e.target.value})
    }

const handleRegistration = () => {
        let {username, email} = userDetails

// (1) check if all feilds have values,
    let isFieldIncomplete = Object.keys(userDetails).some((detail)=> detail === " ")
    if(isFieldIncomplete){
        
        setAlert({ishow: true, status: "error", message: "Field incoomplete"})

        setTimeout(
            ()=> setAlert({ishow: false, status: "", message: "" }), 
            5000)

            return
        }


// (2) Validate email is email 

    let validateRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
    let isEmailCorrect = email.match(validateRegex)

    if(!isEmailCorrect){

        setAlert({ishow: true, status: "error", message: "Email is incorect"})

        setTimeout(
            ()=> setAlert({ishow: false, status: "", message: "" }), 
            5000)

       return
    }

// (3) Validate username doesn't exist

    
    try{
        let usersRepository
        usersRepository = JSON.parse(localStorage.getItem("users"))
        let isUserExist = usersRepository.some((user) => user.username === username)
        if(isUserExist){

        setAlert({ishow: true, status: "error", message: "Username Already Exist"})

        setTimeout(
            ()=> setAlert({ishow: false, status: "", message: "" }), 
            5000)

        return
        }
        

        let newUsersRepository = [userDetails, ...usersRepository]
        localStorage.setItem("users", JSON.stringify(newUsersRepository))
        setAlert({ishow: true, status: "success", message: "Registration Successful"})

        setTimeout(
            ()=> setAlert({ishow: false, status: "", message: "" }), 
            5000)
        }catch(error){
        localStorage.setItem("users", JSON.stringify([userDetails]))
       
        setAlert({ishow: true, status: "success", message: "Registration Successful"})

        setTimeout(
            ()=> setAlert({ishow: false, status: "", message: "" }), 
            5000)

    }
        

    }
    
  return (
    <div className='auth-register'>
        <label>Username</label>
        <input name="username" onChange={handleUserInput}/>
        <label>Email</label>
        <input name="email" type="email" onChange={handleUserInput}/>
        <label>Password</label>
        <input name="password" type="password" onChange={handleUserInput}/>
        <button onClick={handleRegistration}>Register</button>
    </div>
  )
}

export default Register