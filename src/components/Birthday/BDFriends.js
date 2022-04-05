import React from 'react'
import {books} from './books'
import '../../BirthdayApp.css'


function FriendList () {





    const [people, setPeople] = React.useState(books)

    const remove = (id) => {
        setPeople((oldPeople) => {
          let newPeople = oldPeople.filter((person) => person.id !== id);
          return newPeople;
        });
      };

return(
    <div>
    <section  style={{overflowY:"auto", height:"70vh"}} >
        {people.length > 0 ? people.map((person) => {
        const {id, img, name, birthDay} = person;

        return  (
        <div className= 'container2'>
        <article key={id} className='person' >
            <img src={img} alt="pic" />
            <div>
                <h4>{name}</h4>
                <p>{birthDay}</p>
            </div>
            <button onClick = {() => remove(id)}>Remove</button>
            
        </article> 
       </div>

          )

            }
            )
        : 
        <div className='emptyList'>
            <button onClick="window.location.reload(true)"  class="btnSuccess" > 
            Click to refresh list
            
            </button>
            
        </div>
        }
             
        </section>
        <button className='btn' onClick={() => setPeople([])} >clear all</button>
        </div>
    )
}

export default FriendList


// useEffect collects a function and dependency array
// useEffect(() => {fetch("https://jsonplaceholder.typicode.com/posts")}, [])

// jsonplaceholder.typicode.com





