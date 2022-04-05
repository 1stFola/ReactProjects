import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(1);


   const incrementCount = () => {
      // setCount(count+1)
      setCount((prev) => prev + 1)

    }

    const decrementCount = () => {
      setCount((prev) => prev - 1)
    }

    const incrementBy = (val) =>{
      setCount((prev) => prev + val)
    }


  return (

    <>
        <p>{count}</p>
        <button onClick={incrementCount}>+</button>
        <button onClick={() => incrementBy(2)}>*</button>

        <button onClick={decrementCount}>-</button>

    </>
  )
  

}

export default Counter

// We must use the useState inside a functional component