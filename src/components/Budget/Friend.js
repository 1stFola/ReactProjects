import React from 'react'
import '../../BirthdayApp.css'
import { books } from '../Birthday/books'


const Friend = (props) => {
    const {img, name, birthDay} = props
    const [people, setPeople] = React.useState(books)

    const remove = (id) => {
      setPeople((oldPeople) => {
        let newPeople = oldPeople.filter((person) => person.id !== id);
        return newPeople;
      });
    };

  return (
    <div className= 'container2'>
      <article className='person' >
          <img src={img} alt="pic" />
          <div>
              <h4>{name}</h4>
              <p>{birthDay}</p>
          </div>
          <button>Remove</button>
          
      </article> 
    </div>
  )
}

export default Friend

// onClick = {() => remove(id)}

