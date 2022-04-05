import React, { useState } from 'react'
import image from "../Assets/logo192.png"
import './ProfileCard.css'


const ProfileCard = (props) => {

  let {_username , _hobby} = props

  const [state, setState] = useState({username: _username, hobby: _hobby})

  let newObject = {username: `Mr(s)/Miss: ${_username}`, hobby: `is ${_hobby}`}

//   const handleclick = () => {
//     let newObject = {username: `Mr(s)/Miss: ${_username}`, hobby: `is ${_hobby}`}
//     // setState(newObject)
//     setState({...state, ...newObject})
// }

return (   
    <div className='profile-card'>
        <img src={image} alt='profie card' className='profile-card-avatar' />
        <div className='details-container'>
            <div className='firstname-details'>
              <p>Name</p>
              <h1>{state.username}</h1>
              </div>
            
              <div className='hobby-details'>
                <p>Hobby</p>
                <h1>{state.hobby}</h1>

              </div>
            </div>
            {/* <button onClick = {handleclick}> Click Me </button> */}
            <button onClick = {()=>setState(...state, ...newObject)}> Click Me </button>

    </div>
  )
}

export default ProfileCard

// THERE ARE 3 WAYS OF STATE MANAGEMENT IN REACT
//1) Component level state management
//2) Global level state management (REDUX or CONTEXT API works best for this)
//3) App level state menagement (LOCAL STORAGE or SESSION STORAGE works best for this)

// 0254836708 GTBank. Ibidapo