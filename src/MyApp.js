import React from 'react'
import MyButton from './components/MyButton'
import ProfileCard from './components/ProfileCard'
import "./MyApp.css"

const MyApp = () => {


  return (
      <div className= 'myapp-container'>
       
        <ProfileCard username = "Fola" hobby = "Meditating"/>
        <ProfileCard username = "Toyosi" hobby = "Reading"/>
   

       {/* <MyButton buttonName= "Tolu" color = "white" background = "green"/>
        <MyButton buttonName= "Lotachi" color = "black" background = "yellow"/>
        <MyButton buttonName= "Adeola" color = "white" background = "red"/> */}

        </div>
  )
}

export default MyApp