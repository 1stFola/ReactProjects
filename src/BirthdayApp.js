import React from 'react'
import BDFriends from './components/Birthday/BDFriends'
import './BirthdayApp.css'
// import BDAppBody from './BDAppBody'
import {books} from './components/Birthday/books'



const BirthdayApp = () => {
  
  return (
    <div className='container'>
        <h3>5 birthdays today</h3>
        <BDFriends />
       
    </div>
  )
}

export default BirthdayApp